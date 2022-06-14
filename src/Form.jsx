import React, { useEffect, useState } from 'react';
import style from './app.module.css';
import Tags from './Tags';

const Form = () => {
  const [lorem, setLorem] = useState('');
  const [loremDirty, setLoremDirty] = useState(false);
  const [loremError, setLoremError] = useState('Input cannot be empty 📍');
  const [loremSuccess, setLoremSuccess] = useState('');
  const [formValid, setFormValid] = useState(false);
  const [send, setSend] = useState(false);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    if (!lorem && loremError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [lorem, loremError]);

  const blurHandler = (e) => {
    if (e.target.name === 'lorem') {
      if (!lorem) {
        setLoremDirty(true);
      }
    }
  };

  const loremHandler = (e) => {
    setLorem(e.target.value);
    setLoremDirty(e.target.value && false);
    setLoremSuccess('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(lorem);
    setLorem('');
    setSend(true);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (lorem) {
      setTags([...tags, lorem]);
      setLorem('');
    }
  };

  const removeTags = (id) => {
    const filtered = tags.filter((todo, index) => id !== index);
    setTags(filtered);
    setLoremDirty(false);
  };

  return (
    <div className="app">
      <form onClick={(e) => e.preventDefault()}>
        <div className={style.container}>
          <input
            onSubmit={(e) => handleSubmit(e)}
            onChange={(e) => loremHandler(e)}
            value={lorem}
            onBlur={(e) => blurHandler(e)}
            name="lorem"
            type="text"
            placeholder=""
            className={loremDirty && loremError ? style.error : style.input}
          />
          <button disabled={!formValid} type="submit" className={style.btn} onClick={handleSend}>
            Send
          </button>
        </div>
        {loremError && loremDirty && <div>{loremError}</div>}
        {setSend && !loremDirty && <div>{loremSuccess}</div>}
        <Tags tags={tags} removeTags={removeTags} />
      </form>
    </div>
  );
};
export default Form;
