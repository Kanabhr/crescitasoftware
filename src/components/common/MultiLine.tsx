import { Fragment } from "react";

const MultiLine = ({ text }: { text: string }) => (
  <>
    {text.split("\n").map((line, i) => (
      <Fragment key={i}>
        {i > 0 && <br />}
        {line}
      </Fragment>
    ))}
  </>
);

export default MultiLine;
