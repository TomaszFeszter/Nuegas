import { get, merge, set } from "lodash/fp";
import React from "react";
import { useState } from "react";
import { useMemo } from "react";
import { useCallback } from "react";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import i18n from "../../i18n";
import { Btn } from "../Button";
import { Checkbox } from "../Checkbox";
import { Field } from "../Field";
import { H2 } from "../Headings";
import { Input } from "../Input";
import { RadioInput } from "../Radioinput";
import { Select } from "../Select";
import { Switch } from "../Switch";

const Group = styled.div`
  display: flex;
  div:not(:last-child) {
    margin-right: 2rem;
  }
`;

function renderSwitch(
  [key, { type, id, title, placeholder, fields, ...rest }],
  onChange,
  formValues = {}
) {
  rest.value = get(key, formValues);
  switch (type) {
    case "group":
      return (
        <Group>
          {Object.entries(fields).map(([itemKey, item]) =>
            renderSwitch([`${key}.${itemKey}`, item], onChange, formValues)
          )}
        </Group>
      );
    case "text":
    case "email":
    case "password":
      return (
        <Field input label={i18n.t(title)} id={id}>
          <Input
            type={type}
            id={id}
            name={key}
            placeholder={i18n.t(placeholder)}
            onChange={(e) => onChange(key, e.target.value)}
            {...rest}
          />
        </Field>
      );
    case "radio":
      return (
        <RadioInput
          label={i18n.t(placeholder)}
          name={key}
          id={id}
          onChange={(e) => onChange(key, e.target.value)}
          {...rest}
        />
      );
    case "checkbox":
      return (
        <Field checkbox id={id} label={i18n.t(title)} lHeight="2.4rem">
          <Checkbox
            id={id}
            name={key}
            onChange={(e) => onChange(key, e.target.checked)}
            {...rest}
          />
        </Field>
      );
    case "select":
      return (
        <Field input id={id} label={i18n.t(title)} lHeight="2.4rem">
          <Select
            onChange={(e) => onChange(key, e.target.value)}
            id={id}
            name={key}
            {...rest}
          />
        </Field>
      );
    case "switch":
      return (
        <Field switch id={id} label={i18n.t(title)} lHeight="3rem">
          <Switch
            id={id}
            name={key}
            onChange={(e) => onChange(key, e.target.value)}
            {...rest}
          />
        </Field>
      );
    case "submit":
      return (
        <Btn name={key} medium type={type} {...rest}>
          {i18n.t(title)}
        </Btn>
      );
    case "list":
      return (
        <div>
          <input type="hidden" value={formValues[key]} />

          <Btn name={key} medium type={type} {...rest}>
            {i18n.t(title)}
          </Btn>
        </div>
      );
    default:
      return (
        <Field input label={i18n.t(title)} id={id}>
          <Input
            type={type}
            name={key}
            id={id}
            onChange={(e) => onChange(key, e.target.value)}
            {...rest}
          />
        </Field>
      );
  }
}

const AutoFormComponent = ({
  className,
  children,
  schema,
  onSubmit,
  translationKey = "",
  initialValues = {},
}) => {
  const { t } = useTranslation(translationKey);
  const formRef = useRef();
  const [formValues, setFormValues] = useState({ ...initialValues });

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    onSubmit(formData);
  };

  const handleChange = useCallback(
    (key, val) => {
      setFormValues(set(key, val, formValues));
    },
    [formValues, setFormValues]
  );

  const currentSchema = useMemo(() => {
    const {
      if: ifSchema,
      else: elseSchema,
      then: thenSchema,
      ...rest
    } = schema;
    if (ifSchema && (elseSchema || thenSchema)) {
      const fields = ifSchema.fields;
      if (
        Object.entries(fields).every(([key, field]) => {
          return formValues[key] === field.value;
        })
      )
        return merge(rest, thenSchema);
      else return merge(rest, elseSchema);
    }

    return rest;
  }, [schema, formValues]);

  return schema ? (
    <form className={className} onSubmit={handleSubmit} ref={formRef}>
      {currentSchema.title && <H2>{t(currentSchema.title)}</H2>}
      {currentSchema.fields &&
        Object.entries(currentSchema.fields).map((item) =>
          renderSwitch(item, handleChange, formValues)
        )}
    </form>
  ) : (
    <form onSubmit={handleSubmit} ref={formRef}>
      {children}
    </form>
  );
};

export const AutoForm = styled(AutoFormComponent)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: flex-start;
`;
