import React from "react";

interface ActiveDays {
  day?: number | number[];
  title?: string;
  url?: string;
  type?: string;
  isDisabled?: boolean;
}

interface CalendarDate {
  month: number;
  year: number;
}

interface CalendarMonthProps {
  date?: CalendarDate;
  activeDays?: ActiveDays[];
  isCollapsed?: boolean;
  customClasses?: string;
}

export default function Calendar({
  date,
  activeDays,
  isCollapsed,
  customClasses,
}: CalendarMonthProps) {
  const MONTH_TITLE = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  const DAYS_HEADER_TABLE = ["D", "L", "M", "M", "J", "V", "S"];

  //Determina el dia de la semana en que empieza del mes de determinado año
  const getStartDayOfMonth = (year: number, month: number): number => {
    const firstDayOfMonth = new Date(year, month - 1, 1);
    const dayOfWeek = firstDayOfMonth.getDay();
    return dayOfWeek;
  };

  //Día de la semana en que comienza el mes.
  const start: number = getStartDayOfMonth(date!.year, date!.month);

  //Define número de días por mes
  const monthAmountOfDays = (monthNumber?: number, year?: number): number => {
    if (
      typeof monthNumber !== "number" ||
      monthNumber < 1 ||
      monthNumber > 12
    ) {
      return 0;
    }

    if (
      monthNumber === 4 ||
      monthNumber === 6 ||
      monthNumber === 9 ||
      monthNumber === 11
    ) {
      return 30;
    } else if (monthNumber === 2) {
      return (year ? year : 2024) % 4 === 0 ? 29 : 28;
    } else {
      return 31;
    }
  };

  //Define texto del mes
  const monthsTitles = (month?: number) => {
    if (month && month >= 1 && month <= 12) {
      return MONTH_TITLE[month - 1];
    } else {
      return "Mes inválido";
    }
  };

  const daysArray = Array.from(
    {
      length: monthAmountOfDays(date?.month, date?.year),
    },
    (_, index) => index + 1,
  );
  const emptyDaysArray =
    start < 7 &&
    Array.from({length: start}, (_, index) => <td key={index}></td>);
  const daysInAWeek = 7;
  const totalDays = start + daysArray.length;
  const numberWeeks = Math.ceil(totalDays / 7);
  const totalDaysCalentar = daysArray.length + start;
  const totalWeeksCalendar = Math.ceil(totalDaysCalentar / 7);
  const activeDaysNotDisabled = activeDays?.filter(
    (activeDay) => !activeDay.isDisabled,
  ).length;

  const colorActive = (text: string) => {
    const mapTexts: {[key: string]: string} = {
      sky: "bg-sky",
      lavender: "bg-lavender",
      coral: "bg-coral",
      avocado: "bg-avocado",
      citrus: "bg-citrus",
      lime: "bg-lime",
      pistachio: "bg-pistachio",
      berries: "bg-berries",
      musket: "bg-musket",
      blackberry: "bg-blackberry",
      aqua: "bg-aqua",
      strawberry: "bg-strawberry",
      gray: "bg-gray",
    };

    const result = mapTexts[text.toLowerCase()] || "";

    return result;
  };

  const renderActiveDay = (
    day: number,
    activeItem: ActiveDays,
  ): JSX.Element => (
    <span
      className={
        activeItem.type
          ? activeItem.type === "secondary"
            ? "active-secondary"
            : `active ${colorActive(activeItem.type)}`
          : "active"
      }
    >
      {day}
    </span>
  );

  const renderDayTd = (day: number, activeItem?: ActiveDays): JSX.Element => {
    if (activeItem) {
      return (
        <td key={day}>
          {activeItem.isDisabled ? (
            <span className="disabled">{day}</span>
          ) : activeItem.url != undefined ? (
            <a
              href={activeItem.url}
              className="calendar-link"
              title={activeItem.title && activeItem.title}
            >
              {renderActiveDay(day, activeItem)}
            </a>
          ) : (
            <span title={activeItem.title && activeItem.title}>
              {renderActiveDay(day, activeItem)}
            </span>
          )}
        </td>
      );
    } else {
      return (
        <td key={day}>
          <span>{day}</span>
        </td>
      );
    }
  };

  const renderDays = (
    startIdx: number,
    endIdx: number,
    activeItems?: ActiveDays[],
  ) =>
    daysArray.slice(startIdx, endIdx).map((day) => {
      const activeItem = activeItems?.find((obj) => {
        if (Array.isArray(obj.day)) {
          return obj.day.includes(day);
        }
        return obj.day === day;
      });
      return renderDayTd(day, activeItem);
    });

  const renderDaysForRow = (
    startIdx: number,
    endIdx: number,
    activeItems?: ActiveDays[],
  ) => {
    const daysForRow: Array<number | null> = daysArray.slice(startIdx, endIdx);

    while (daysForRow.length < 7) {
      daysForRow.push(null);
    }

    return daysForRow.map((day, index) => {
      if (day !== null) {
        const activeItem = activeItems?.find((obj) => {
          if (Array.isArray(obj.day)) {
            return obj.day.includes(day);
          }
          return obj.day === day;
        });
        return renderDayTd(day, activeItem);
      } else {
        return (
          <td key={index}>
            <span></span>
          </td>
        );
      }
    });
  };

  const renderEmptyCells = () => {
    const emptyCells = [];
    let i = 0;

    while (i < 7) {
      emptyCells.push(
        <td key={i}>
          <span></span>
        </td>,
      );
      i++;
    }

    return emptyCells;
  };

  const renderFooter = () => {
    if (activeDays && (activeDaysNotDisabled || 0 > 0)) {
      return (
        <div className="calendar-footer">
          {isCollapsed ? (
            <div className="accordion">
              <div className="card">
                <button
                  className="card-header collapsed"
                  data-toggle="collapse"
                  data-target={`#collapse${monthsTitles(date?.month)}`}
                >
                  <i className="bx bx-calendar"></i>
                  <span className="collapse-title">Referencias</span>
                </button>
                <div
                  id={`collapse${monthsTitles(date?.month)}`}
                  className="collapse"
                >
                  <div className="card-body">
                    <ul className="calendar-footer-list">
                      {activeDays?.map(
                        (activeDay, index) =>
                          !activeDay.isDisabled && (
                            <li key={index}>
                              <strong>
                                {Array.isArray(activeDay.day) &&
                                activeDay.day.length === 2
                                  ? `${activeDay.day[0]}, ${activeDay.day[1]}.`
                                  : Array.isArray(activeDay.day) &&
                                      activeDay.day.length > 2
                                    ? `${activeDay.day[0]} al ${
                                        activeDay.day[activeDay.day.length - 1]
                                      }.`
                                    : `${activeDay.day}.`}
                              </strong>{" "}
                              {activeDay.title}
                            </li>
                          ),
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <ul className="calendar-footer-list">
              {activeDays?.map(
                (activeDay, index) =>
                  !activeDay.isDisabled && (
                    <li key={index}>
                      <strong>
                        {Array.isArray(activeDay.day) &&
                        activeDay.day.length === 2
                          ? `${activeDay.day[0]}, ${activeDay.day[1]}.`
                          : Array.isArray(activeDay.day) &&
                              activeDay.day.length > 2
                            ? `${activeDay.day[0]} al ${
                                activeDay.day[activeDay.day.length - 1]
                              }.`
                            : `${activeDay.day}.`}
                      </strong>{" "}
                      {activeDay.title}
                    </li>
                  ),
              )}
            </ul>
          )}
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div className={`calendar ${customClasses}`}>
      <div className="calendar-header">
        <h2 className="calendar-title">
          {date ? monthsTitles(date!.month) : "Mes inválido"}
        </h2>
        <span className="calendar-year">
          {date ? date!.year : "Año inválido"}
        </span>
      </div>
      <div className="calendar-body">
        <table>
          <thead>
            <tr className="calendar-week-header">
              {DAYS_HEADER_TABLE.map((dayHeader, index) => (
                <th key={index}>
                  <span>{dayHeader}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from({length: numberWeeks}, (_, i) => (
              <tr key={i} className="calendar-week">
                {i === 0 ? (
                  <>
                    {emptyDaysArray}
                    {renderDays(i, daysInAWeek - start, activeDays)}
                  </>
                ) : (
                  <>
                    {renderDaysForRow(
                      daysInAWeek * i - start,
                      daysInAWeek - start + daysInAWeek * i,
                      activeDays,
                    )}
                  </>
                )}
              </tr>
            ))}
            {totalWeeksCalendar !== 6 && (
              <tr className="calendar-week">{renderEmptyCells()}</tr>
            )}
          </tbody>
        </table>
      </div>
      {renderFooter()}
    </div>
  );
}
