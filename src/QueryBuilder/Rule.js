import React, { useState, useEffect } from "react";

export default function Rule({ fields, operators, combinators, ...props }) {
  const [combinator, setCombinator] = useState(props.combinator);
  const [field, setField] = useState(props.field);
  const [operator, setOperator] = useState(props.operator);
  const [value, setValue] = useState(props.value);

  useEffect(() => {
    props.onChange({ field, operator, value, combinator, index: props.index });
  }, [field, operator, value, combinator]);

  const combinatorElement = props.index ? (
    <select
      className="react-es-rule-combinator"
      value={combinator}
      onChange={e => setCombinator(e.target.value)}
    >
      {combinators.map(c => (
        <option key={c.value} value={c.value}>
          {c.text}
        </option>
      ))}
    </select>
  ) : null;

  const deleteButton = props.index ? (
    <button className="react-es-rule-delete" onClick={() => props.onDelete(props.index)}>
      x
    </button>
  ) : null;

  return (
    <div className="react-es-rule">
      {combinatorElement}
      <select
        className="react-es-rule-field"
        value={field}
        onChange={e => setField(e.target.value)}
      >
        {fields.map(f => {
          return (
            <option key={f.value} value={f.value}>
              {f.text}
            </option>
          );
        })}
      </select>
      <select
        className="react-es-rule-operator"
        value={operator}
        onChange={e => setOperator(e.target.value)}
      >
        {operators.map(o => {
          return (
            <option key={o.value} value={o.value}>
              {o.text}
            </option>
          );
        })}
      </select>
      <input
        className="react-es-rule-value"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <button className="react-es-rule-add" onClick={props.onAdd}>
        +
      </button>
      {deleteButton}
    </div>
  );
}
