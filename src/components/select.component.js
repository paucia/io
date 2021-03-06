import React, {useState, useEffect} from "react";


export default function Select({value, onChange, label, options, valueMapper, nameMapper, customLabelWidth = "75px",
                                disabled = false}) {
  const [currentValue, setCurrentValue] = useState(value);

  useEffect(() => {
    setCurrentValue(value);
  }, [options, value])

  function updateValue(value) {
    setCurrentValue(value);
    onChange(value);
  }

  return (
    <div className="row">
      <label className="sr-only" htmlFor="inlineFormInputGroup">{label}</label>
      <div className="input-group mb-2">
        <div className="input-group-prepend">
          <div className="input-group-text" style={{width: customLabelWidth}}>{label}</div>
        </div>
        <select className="form-control" value={currentValue} onChange={e => updateValue(e.target.value)} disabled={disabled}>
          {
            options.map($ => <option value={valueMapper($)}>{nameMapper($)}</option>)
          }
          <option selected style={{display: "none"}}>Wybierz...</option>
        </select>
      </div>
    </div>
  )
}