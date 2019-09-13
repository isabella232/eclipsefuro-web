{
  "theme": "PanelBaseTheme",
  "class_name": "personPersonUpdatePanel",
  "component_name": "person-person-update-panel",
  "description": "Updates a Person, partial updates are supported",
  "source": "./specs/person/person.service.spec",
  "service_name": "PersonService",
  "response_type": "person.PersonEntity",
  "imports": [
    "../forms/person-person-form",
    "../actions/person-person-update-action"
  ],
  "form": {
    "name": "person-person-form",
    "flags": [
      "flex"
    ],
    "attrs": []
  },
  "action": {
    "name": "person-person-update-action",
    "listen_to": [
      "update"
    ],
    "flags": [],
    "attrs": []
  },
  "request_type": "person.Person"
}