import React, {useEffect, useRef, useState, useCallback} from 'react';
import ReactDOM from 'react-dom/client';

// list element factory
function createListElement(name = "", phone = "", active = true) {
  return {
    name,
    phone,
    id: Math.random().toString(36).slice(2),
    active,
    visible: true
  }
}

// modifiers
const addContact = (setList, e) => {
  e.preventDefault();
  const {name, phone} = e.target;
  setList(prevList => {
    return [...prevList, createListElement(name.value, phone.value)];
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

function ListItem({name, phone, id, active, visible, removeContactHandler, toggleListElementHandler}) {
  const count = useRef(1);
  count.current += 1;

  return <>
    <li key={id} data-visible={visible}>
      <span data-id={id}
            data-active={active}
            onClick={toggleListElementHandler}
      >{name} | {phone}</span>
      <button data-id={id} onClick={removeContactHandler}>x</button>
      ({count.current})
    </li>
  </>
}

const ListItemM = React.memo(ListItem);

const ContactsList = ({list, setList}) => {
  const removeContactHandler = useCallback(removeContact.bind(null, setList), []);
  const toggleListElementHandler = useCallback(toggleListElement.bind(null, setList), []);

  return (<ul>
    {list.map(listItem => (
      <ListItemM
        {...listItem}
        key={listItem.id}
        {...{removeContactHandler, toggleListElementHandler}}
      />))}
  </ul>)
};

function ContactsApp({savedContacts, savedSettings}) {
  const [list, setList] = useState(savedContacts);
  const [settings, setSettings] = useState(savedSettings);

  const _name = useRef();
  const _phone = useRef();
  const _filter = useRef();

  const filterOutListHandler = useCallback(filterOutList.bind(null, setList, setSettings), []);
  const clearFilterHandler = useCallback(clearFilter.bind(null, setList, setSettings, _filter), [_filter]);
  const addContactHandler = useCallback(addContact.bind(null, setList), []);

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
             onChange={filterOutListHandler}
             value={settings.filter}
      />&nbsp;
      <span className="clear-filter" onClick={clearFilterHandler}>clear</span>
      <ContactsList {...{list, setList}} />
      <form onSubmit={addContactHandler}>
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
  <ContactsApp {...{savedSettings, savedContacts}}/>
);
