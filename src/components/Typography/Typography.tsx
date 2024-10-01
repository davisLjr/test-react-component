import React, {ReactNode} from "react";

interface BasicTypography {
  content: string;
  className?: string;
}

interface BodyAndTagProps extends BasicTypography {
  size: "xs" | "sm" | "md" | "lg" | "xl";
  italic?: "italic";
  underline?: "underline";
  weight: "bold" | "semibold" | "normal";
}

interface TitleProps extends BasicTypography {
  content: string;
  weight: "bold" | "semibold" | "normal";
  level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

interface QuoteProps extends BasicTypography {
  author?: ReactNode;
}

interface ListProps {
  list: "ol" | "ul";
  content: string[];
  className?: string;
}

interface TransfomationsProps extends BasicTypography {
  transform:
    | "strong"
    | "em"
    | "small"
    | "small"
    | "mark"
    | "sup"
    | "sub"
    | "kbd";
}

const weightFunction = (weight: string) => {
  let titleWeightClass = "font-weight-";

  switch (weight) {
  case "bold":
    titleWeightClass += "bold";
    break;
  case "semibold":
    titleWeightClass += "semibold";
    break;
  case "normal":
    titleWeightClass += "normal";
    break;
  default:
    titleWeightClass += "normal";
  }
  return titleWeightClass;
};

const sizeFunction = (size: "xs" | "sm" | "md" | "lg" | "xl") => {
  let sizeClass = "font-weight-";

  switch (size) {
  case "xs":
    sizeClass += "xs";
    break;
  case "sm":
    sizeClass += "sm";
    break;
  case "md":
    sizeClass += "md";
    break;
  case "lg":
    sizeClass += "lg";
    break;
  case "xl":
    sizeClass += "xl";
    break;
  default:
    sizeClass += "md";
  }
  return sizeClass;
};

const italicUnderline = (style?: "italic" | "underline") => {
  if (style === "italic") {
    return "font-italic";
  } else if (style === "underline") {
    return "underline-1";
  } else {
    return "";
  }
};

// Titulos - Inicio
export const Title: React.FC<TitleProps> = ({
  level,
  content,
  className,
  weight,
}) => {
  const TitleElement = level;
  const titleWeightClass = weightFunction(weight);

  return (
    <TitleElement
      className={
        className ? `${className} ${titleWeightClass}` : titleWeightClass
      }
    >
      {content}
    </TitleElement>
  );
};
// Titulos - Fin

// Titulares - Inicio
export const Tag: React.FC<BodyAndTagProps> = ({
  size,
  content,
  weight,
  className,
}) => {
  const headlineSizeClass = sizeFunction(size);
  const titleWeightClass = weightFunction(weight);

  return (
    <p
      className={
        className
          ? `${className} ${titleWeightClass} ${headlineSizeClass} `
          : `${headlineSizeClass} ${titleWeightClass} `
      }
    >
      {content}
    </p>
  );
};
// Titulares - Fin

// Cuerpo - Inicio
export const Body: React.FC<BodyAndTagProps> = ({
  size,
  content,
  weight,
  className,
  italic,
  underline,
}) => {
  const titleWeightClass = weightFunction(weight);
  const textSizeClass = sizeFunction(size);
  const italicClass = italicUnderline(italic);
  const underlineClass = italicUnderline(underline);

  return (
    <p
      className={
        className
          ? `${className} ${titleWeightClass} ${textSizeClass} ${italicClass} ${underlineClass}`
          : `${textSizeClass} ${titleWeightClass} ${italicClass} ${underlineClass}`
      }
    >
      {content}
    </p>
  );
};
// Cuerpo - Fin

// Citas - Inicio
export const Quote: React.FC<QuoteProps> = ({content, className, author}) => {
  return (
    <>
      <blockquote className={className ? `${className} ` : ""}>
        <p> {content} </p>
        {author ? <small>{author}</small> : ""}
      </blockquote>
    </>
  );
};
// Citas - Fin

// Listas - Inicio
export const List: React.FC<ListProps> = ({content, className, list}) => {
  const TagList = list;

  return (
    <>
      <TagList className={className ? `${className} ` : ""}>
        {content.map((e, i) => {
          return <li key={i}>{e}</li>;
        })}
      </TagList>
    </>
  );
};
// Listas - Fin

// Transformaciones - Inicio
export const Transformation: React.FC<TransfomationsProps> = ({
  content,
  transform,
}) => {
  const Tag = transform;

  return <Tag>{content}</Tag>;
};
// Transformaciones - Fin

export default {Body, Tag, Title, Quote, List, Transformation};
