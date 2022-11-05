import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { Btn } from "../Button";
import { Checkbox } from "../Checkbox";
import { Field } from "../Field";
import { H2 } from "../Headings";
import { Input } from "../Input";
import { RadioInput } from "../Radioinput";
import { Select } from "../Select";
import { Switch } from "../Switch";
export const AutoForm = ({ children, schema, onSubmit }) => {
  const [currentSchema, setCurrentSchema] = useState(schema);
  const [newSchema, setNewSchema] = useState({});
  const [fulfieldConditions, setFulfieldConditions] = useState({ fields: {} });
  const formRef = useRef();

  useEffect(() => {
    Object.entries(schema.then).map(([key, value]) => {
      if (typeof value !== "object") setNewSchema((newSchema[key] = value));
    });
    console.log(newSchema);
  }, []);

  useEffect(() => {
    // Object.entries(schema.if.fields).map(([key, value]) => {
    //   if (key in fulfieldConditions.fields) {
    //     if (typeof value === "object") {
    //       Object.entries(value).map(([fieldKey, fieldValue]) => {
    //         if (fieldKey in fulfieldConditions.fields[key]) {
    //           if (fieldValue !== fulfieldConditions.fields[key][fieldKey])
    //             return;
    //         }
    //       });
    //     }
    //   } else return;
    //   setCurrentSchema(newSchema);
    // });

    schema.if === fulfieldConditions
      ? setCurrentSchema(newSchema)
      : console.log("twoja stara schema");
  }, [fulfieldConditions]);

  const handleChange = (e) => {
    // console.log(Object.entries(schema.then));
    // console.log(Object.entries(schema));

    if ("if" in schema && e.target.name in schema.if.fields) {
      if (e.target.value === schema.if.fields[e.target.name].const) {
        setFulfieldConditions(
          (fulfieldConditions.fields[e.target.name] =
            schema.if.fields[e.target.name])
        );
        console.log(fulfieldConditions);
        console.log(schema.if);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    onSubmit(formData);
  };

  function renderSwitch([
    key,
    { type, id, title, placeholder, values, config },
  ]) {
    switch (type) {
      case "text":
      case "email":
      case "password":
        return (
          <Field input label={title} id={id}>
            <Input
              type={type}
              id={id}
              name={key}
              placeholder={placeholder}
              handleChange={handleChange}
            />
          </Field>
        );
      case "radio":
        return (
          <RadioInput
            label={title}
            name={key}
            values={values}
            id={id}
            onChange={handleChange}
          />
        );
      case "checkbox":
        return (
          <Field checkbox id={id} label={title} lHeight="2.4rem">
            <Checkbox id={id} name={key} onChange={handleChange} />
          </Field>
        );
      case "select":
        return (
          <Field input id={id} label={title} lHeight="2.4rem">
            <Select
              options={config.options}
              selectedOption={config.selectedOption}
              changeSelectedOption={config.changeSelectedOption}
              onChange={handleChange}
              id={id}
              name={key}
            />
          </Field>
        );
      case "switch":
        return (
          <Field switch id={id} label={title} lHeight="3rem">
            <Switch id={id} name={key} onChange={handleChange} />
          </Field>
        );
      case "submit":
        return (
          <Btn
            name={key}
            secondary={config.secondary ? config.secondary : false}
            long={config.long ? config.long : false}
            handleClick={config.handleClick}
            medium
            type={type}
          >
            {title}
          </Btn>
        );
      default:
        return <Input type={type} id={id} onChange={handleChange} />;
    }
  }

  return schema ? (
    <form onSubmit={handleSubmit} ref={formRef}>
      {currentSchema.title && <H2>{currentSchema.title}</H2>}
      {currentSchema.fields &&
        Object.entries(currentSchema.fields).map(renderSwitch)}
    </form>
  ) : (
    <form onSubmit={handleSubmit} ref={formRef}>
      {children}
    </form>
  );
};
