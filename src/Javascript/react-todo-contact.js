// Mix of the basic Contact and Todo app
// with filter, localstorage save, actions with binds

import React, {useEffect, useRef, useState} from 'react';
import ReactDOM from 'react-dom/client';

class ListElement {
  constructor(name, phone, active = true) {
    this.name = name;
    this.phone = phone;
    this.id = Math.random().toString(36).slice(2);
    this.active = active;
    this.visible = true;
  }
}

const addContact = (setList, e) => {
  e.preventDefault();
  const {name, phone} = e.target;
  setList(prevList => {
    return [...prevList, new ListElement(name.value, phone.value)];
  });
}

const removeContact = (setList, e) => {
  const {id} = e.target.dataset;
  setList(prevList => {
    return [...prevList].filter(item => item.id !== id);
  });
}

const toggleListElement = (setList, e) => {
  const {id} = e.target.dataset;
  setList(list => {
    const i = list.findIndex(e => e.id === id);
    const element = list[i];
    return [...list.slice(0, i), {...element, active: !element.active}, ...list.slice(i + 1)];
  });
}

const filterOutList = (setList, setSettings, e) => {
  const filter = e.target.value.toLowerCase();
  setSettings(settings => ({...settings, filter}))
  setList(list => list.map(el => {
    const elCopy = {...el};
    elCopy.visible = elCopy.name.toLowerCase().indexOf(filter) > -1 || elCopy.phone.toLowerCase().indexOf(filter) > -1;
    return elCopy;
  }));
};

const clearFilter = (setList, setSettings, _filter) => {
  _filter.current.value = '';
  setSettings(settings => ({...settings, filter: ''}));
  setList(list => list.map(el => ({...el, visible: true})))
}

const ContactsList = ({list, setList}) => {
  return (<ul>
    {list.map(listItem => (
      <ListItem
        {...listItem}
        key={listItem.id}
        removeContactHandler={removeContact.bind(null, setList)}
        toggleListElementHandler={toggleListElement.bind(null, setList)}
      />))}
  </ul>)
};

function ListItem({name, phone, id, active, visible, removeContactHandler, toggleListElementHandler}) {
  return <>
    <li key={id} data-visible={visible}>
      <span data-id={id}
            data-active={active}
            onClick={toggleListElementHandler}
      >{name} | {phone}</span>
      <button data-id={id} onClick={removeContactHandler}>x</button>
    </li></>
}

function ContactsApp({savedContacts, savedSettings}) {
  const [list, setList] = useState(savedContacts);
  const [settings, setSettings] = useState(savedSettings);

  const _name = useRef();
  const _phone = useRef();
  const _filter = useRef();

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(list));
    _name.current.value = '';
    _phone.current.value = '';
  }, [list]);

  useEffect(() => {
    window.localStorage.setItem('contacts-settings', JSON.stringify(settings));
  }, [settings]);

  return (
    <section id="contacts-app">
      <input type="text" name="filter" ref={_filter} placeholder="filter"
             onChange={filterOutList.bind(null, setList, setSettings)}
             value={settings.filter}
      />&nbsp;
      <span className="clear-filter" onClick={clearFilter.bind(null, setList, setSettings, _filter)}>clear</span>
      <ContactsList {...{list, setList}} />
      <form onSubmit={addContact.bind(null, setList)}>
        <input type="text" name="name" placeholder="Contact name" ref={_name}/>
        <input type="text" name="phone" placeholder="Number" ref={_phone}/>
        <button type="submit">add</button>
      </form>
    </section>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

const savedContacts = JSON.parse(window.localStorage.getItem('contacts') || "[]");
const savedSettings = JSON.parse(window.localStorage.getItem('contacts-settings') || '{"filter": ""}');

root.render(
  <React.StrictMode>
    <ContactsApp {...{savedSettings, savedContacts}}/>
  </React.StrictMode>
);
