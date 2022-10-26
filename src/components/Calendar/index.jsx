import Calendar from "react-calendar";
import styled from "styled-components";
import React from "react";
import { weekDays } from "../../Helpers/getWeekDays";

const CalendarComponent = ({ className }) => {
  return (
    <Calendar
      className={className}
      // calendarType="ISO 8601"
      formatShortWeekday={(locale, date) => {
        return weekDays["pl-PL"][date.getDay()][0].toUpperCase();
      }}
    />
  );
};

// us figma
// ISO 8601 europa

/* styled with important due to properties hardcoded by library authors */
export const AppCalendar = styled(CalendarComponent)`
  max-width: 37.2rem;
  background-color: ${(props) => props.theme.white};
  border-radius: 1rem;
  padding: 2.4rem 2rem 2rem;

  .react-calendar {
    &__navigation {
      margin-bottom: 3.6rem;
      display: flex;
      align-items: center;

      &__arrow,
      &__label {
        background-color: transparent;
        border: none;
      }

      &__arrow {
        width: 2rem;
        height: 2rem;
        color: ${(props) => props.theme.textDark800};
        font-weight: 500;
        font-size: 2.5rem;
        line-height: 1.5rem;
      }

      &__label {
        margin: 0 auto;
        flex-grow: 0 !important;
        &__labelText {
          color: ${(props) => props.theme.textDark800};
          font-weight: 600;
          font-size: 1.4rem;
          line-height: 2.1rem;
        }
      }
    }

    &__tile {
      color: ${(props) => props.theme.textDark800};
      font-weight: 500;
      font-size: 1.2rem;
      line-height: 1.5rem;
      width: 3.2rem;
      height: 3.2rem;
      border-radius: 1.6rem;
      background-color: ${(props) => props.theme.light500};
      border: none;
    }

    &__viewContainer {
      .react-calendar {
        &__month-view {
          .react-calendar__tile--now.react-calendar__tile--active {
            border: ${(props) => `3px solid ${props.theme.dark800}`};
          }
          .react-calendar__tile {
            &--now {
              width: 3.2rem;
              height: 3.2rem;
              background-color: ${(props) => props.theme.blue500};

              border-radius: 2rem;
              color: ${(props) => props.theme.textWhite};
            }

            &--active {
              border: ${(props) => `2px solid ${props.theme.dark500}`};
            }
          }
          &__weekdays,
          &__days {
            display: grid !important;
            grid-template-columns: repeat(7, 1fr);
            justify-items: center;
          }

          &__weekdays {
            margin-bottom: 1.2rem;

            &__weekday {
              color: ${(props) => props.theme.textDark800};
              font-weight: 500;
              font-size: 1.2rem;
              line-height: 1.5rem;
              abbr {
                text-decoration: none;
                width: 3.2rem;
                height: 3.2rem;
              }
            }
          }

          &__days {
            row-gap: 0.5rem;

            .react-calendar__month-view__days__day--weekend.react-calendar__month-view__days__day--neighboringMonth {
              background-color: ${(props) => props.theme.light950};
            }

            &__day {
              flex: unset !important;

              &--weekend {
                background-color: ${(props) => props.theme.light700};
              }

              &--neighboringMonth {
                opacity: 0.35;
                background-color: ${(props) => props.theme.light800};
              }
            }
          }
        }

        &__century-view__decades,
        &__year-view__months,
        &__decade-view__years {
          display: grid !important;
          grid-template-columns: repeat(3, 1fr);
          justify-items: center;
          row-gap: 0.5rem;

          .react-calendar__tile {
            width: 9.3rem;
          }
        }
      }
    }
  }
`;
