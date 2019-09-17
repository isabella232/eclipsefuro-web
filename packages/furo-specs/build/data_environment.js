export const Services ={"TreeService":{"name":"TreeService","description":"service specs for the tree api","version":"0.0.1","lifecycle":{"deprecated":false,"info":"This version is still valid"},"__proto":{"package":"treeservice","imports":["tree/tree.proto","google/protobuf/empty.proto"],"targetfile":"service.proto"},"services":{"List":{"description":"The List method takes zero or more parameters as input, and returns a TreeCollection of TreeEntity that match the input parameters.","rpc_name":"ListTrees","data":{"request":null,"response":"tree.TreeCollection"},"query":{"q":{"description":"Query term to search a tree","type":"string","meta":{"label":"Search","hint":""},"__proto":{"type":"string"}}},"deeplink":{"description":"Describe_the_query_params_if_you_have","rel":"list","href":"/mockdata/trees","method":"GET"}},"Create":{"description":"Creates a new Tree","rpc_name":"CreateTree","data":{"request":"tree.Tree","response":"tree.TreeEntity"},"query":{},"deeplink":{"rel":"create","href":"/mockdata/trees","method":"POST"}},"Get":{"description":"The Get method takes zero or more parameters, and returns a TreeEntity which contains a Tree","rpc_name":"GetTree","data":{"request":null,"response":"tree.TreeEntity"},"query":{},"deeplink":{"rel":"self","href":"/mockdata/trees/{tre}/get.json","method":"GET"}},"Update":{"description":"Updates a Tree, partial updates are supported","rpc_name":"UpdateTree","data":{"request":"tree.Tree","response":"tree.TreeEntity"},"query":{},"deeplink":{"rel":"update","href":"/mockdata/trees/{tre}","method":"PATCH"}},"Delete":{"description":"Delete a Tree","rpc_name":"DeleteTree","data":{"request":"google.protobuf.Empty","response":"google.protobuf.Empty"},"query":{},"deeplink":{"rel":"delete","href":"/mockdata/trees/{tre}","method":"DELETE"}}}},"PersonService":{"name":"PersonService","description":"service specs for the person api","version":"0.0.1","lifecycle":{"deprecated":false,"info":"This version is still valid"},"__proto":{"package":"personservice","imports":["person/person.proto","google/protobuf/empty.proto"],"targetfile":"service.proto"},"services":{"List":{"description":"The List method takes zero or more parameters as input, and returns a PersonCollection of PersonEntity that match the input parameters.","rpc_name":"ListPersons","data":{"request":null,"response":"person.PersonCollection"},"query":{"q":{"description":"Query term to search a person","type":"string","meta":{"label":"Search","hint":""},"__proto":{"type":"string"}}},"deeplink":{"description":"Describe_the_query_params_if_you_have","rel":"list","href":"/mockdata/persons/list.json","method":"GET"}},"Create":{"description":"Creates a new Person","rpc_name":"CreatePerson","data":{"request":"person.Person","response":"person.PersonEntity"},"query":{},"deeplink":{"rel":"create","href":"/mockdata/persons/create.json","method":"GET"}},"Get":{"description":"The Get method takes zero or more parameters, and returns a PersonEntity which contains a Person","rpc_name":"GetPerson","data":{"request":null,"response":"person.PersonEntity"},"query":{},"deeplink":{"rel":"self","href":"/mockdata/persons/{prs}/get.json","method":"GET"}},"Update":{"description":"Updates a Person, partial updates are supported","rpc_name":"UpdatePerson","data":{"request":"person.Person","response":"person.PersonEntity"},"query":{},"deeplink":{"rel":"update","href":"/mockdata/persons/{prs}/update.json","method":"GET"}},"Delete":{"description":"Delete a Person","rpc_name":"DeletePerson","data":{"request":"google.protobuf.Empty","response":"google.protobuf.Empty"},"query":{},"deeplink":{"rel":"delete","href":"/mockdata/persons/{prs}/delete.json","method":"GET"}}}},"ProjectService":{"name":"ProjectService","description":"service specs for the project api","version":"0.0.1","lifecycle":{"deprecated":false,"info":"This version is still valid"},"__proto":{"package":"projectservice","imports":["project/project.proto","google/protobuf/empty.proto"],"targetfile":"service.proto"},"services":{"List":{"description":"The List method takes zero or more parameters as input, and returns a ProjectCollection of ProjectEntity that match the input parameters.","rpc_name":"ListProjects","data":{"request":null,"response":"project.ProjectCollection"},"query":{"q":{"description":"Query term to search a project","type":"string","meta":{"label":"Search","hint":""},"__proto":{"type":"string"}}},"deeplink":{"description":"Describe_the_query_params_if_you_have","rel":"list","href":"/mockdata/projects/list.json","method":"GET"}},"Create":{"description":"Creates a new Project","rpc_name":"CreateProject","data":{"request":"project.Project","response":"project.ProjectEntity"},"query":{},"deeplink":{"rel":"create","href":"/mockdata/projects/create.json","method":"GET"}},"Get":{"description":"The Get method takes zero or more parameters, and returns a ProjectEntity which contains a Project","rpc_name":"GetProject","data":{"request":null,"response":"project.ProjectEntity"},"query":{},"deeplink":{"rel":"self","href":"/mockdata/projects/{prj}/get.json","method":"GET"}},"Update":{"description":"Updates a Project, partial updates are supported","rpc_name":"UpdateProject","data":{"request":"project.Project","response":"project.ProjectEntity"},"query":{},"deeplink":{"rel":"update","href":"/mockdata/projects/{prj}/update.json","method":"GET"}},"Delete":{"description":"Delete a Project","rpc_name":"DeleteProject","data":{"request":"google.protobuf.Empty","response":"google.protobuf.Empty"},"query":{},"deeplink":{"rel":"delete","href":"/mockdata/projects/{prj}/delete.json","method":"GET"}}}},"ProjectMembersService":{"name":"ProjectMembersService","description":"The members of a project","version":"1.0.0","lifecycle":{"deprecated":false,"info":"This version is still valid"},"__proto":{"package":"projectmemberservice","imports":["person/person.proto"],"targetfile":"service.proto"},"services":{"Unsubscribe":{"description":"Custom method to unsubscribe a member, complete PersonEntity is expected","rdpc_name":"UnsubscribeMember","data":{"request":"person.PersonEntity","response":"person.PersonCollection"},"query":{},"deeplink":{"description":"{prs} stands for person","rel":"unsubscibe","href":"/api/projects/{prj}/members/{prs}:unsubscribe","method":"POST"}},"List":{"description":"Get a collection with PersonEntities","rpc_name":"ListMembers","data":{"request":null,"response":"person.PersonCollection"},"query":{"q":{"description":"Query term to search a member","type":"string","meta":{"label":"Search","hint":""},"__proto":{"type":"string"}}},"deeplink":{"rel":"list","href":"/api/members","method":"GET"}}}},"TaskService":{"name":"TaskService","description":"service specs for the task api","version":"0.0.1","lifecycle":{"deprecated":false,"info":"This version is still valid"},"__proto":{"package":"taskservice","imports":["task/task.proto","google/protobuf/empty.proto"],"targetfile":"service.proto"},"services":{"List":{"description":"The List method takes zero or more parameters as input, and returns a TaskCollection of TaskEntity that match the input parameters.","rpc_name":"ListTasks","data":{"request":null,"response":"task.TaskCollection"},"query":{"q":{"description":"Query term to search a task","type":"string","meta":{"label":"Search","hint":""},"__proto":{"type":"string"}}},"deeplink":{"description":"Describe_the_query_params_if_you_have","rel":"list","href":"/mockdata/tasks/list.json","method":"GET"}},"Create":{"description":"Creates a new Task","rpc_name":"CreateTask","data":{"request":"task.Task","response":"task.TaskEntity"},"query":{},"deeplink":{"rel":"create","href":"/mockdata/tasks/create.json","method":"GET"}},"Get":{"description":"The Get method takes zero or more parameters, and returns a TaskEntity which contains a Task","rpc_name":"GetTask","data":{"request":null,"response":"task.TaskEntity"},"query":{},"deeplink":{"rel":"self","href":"/mockdata/tasks/{tsk}/get.json","method":"GET"}},"Update":{"description":"Updates a Task, partial updates are not supported","rpc_name":"UpdateTask","data":{"request":"task.Task","response":"task.TaskEntity"},"query":{},"deeplink":{"rel":"update","href":"/mockdata/tasks/{tsk}/update.json","method":"GET"}},"Delete":{"description":"Delete a Task","rpc_name":"DeleteTask","data":{"request":"google.protobuf.Empty","response":"google.protobuf.Empty"},"query":{},"deeplink":{"rel":"delete","href":"/mockdata/tasks/{tsk}/delete.json","method":"GET"}}}},"ExperimentService":{"name":"ExperimentService","description":"service specs for the experiment api","version":"0.0.1","lifecycle":{"deprecated":false,"info":"This version is still valid"},"__proto":{"package":"experimentservice","imports":["experiment/experiment.proto","google/protobuf/empty.proto"],"targetfile":"service.proto"},"services":{"List":{"description":"The List method takes zero or more parameters as input, and returns a ExperimentCollection of ExperimentEntity that match the input parameters.","rpc_name":"ListExperiments","data":{"request":null,"response":"experiment.ExperimentCollection"},"query":{"q":{"description":"Query term to search a experiment","type":"string","meta":{"label":"Search","hint":""},"__proto":{"type":"string"}}},"deeplink":{"description":"Describe_the_query_params_if_you_have","rel":"list","href":"/mockdata/experiments","method":"GET"}},"Create":{"description":"Creates a new Experiment","rpc_name":"CreateExperiment","data":{"request":"experiment.Experiment","response":"experiment.ExperimentEntity"},"query":{},"deeplink":{"rel":"create","href":"/mockdata/experiments","method":"POST"}},"Get":{"description":"The Get method takes zero or more parameters, and returns a ExperimentEntity which contains a Experiment","rpc_name":"GetExperiment","data":{"request":null,"response":"experiment.ExperimentEntity"},"query":{},"deeplink":{"rel":"self","href":"/mockdata/experiments/{exp}/get.json","method":"GET"}},"Update":{"description":"Updates a Experiment, partial updates are supported","rpc_name":"UpdateExperiment","data":{"request":"experiment.Experiment","response":"experiment.ExperimentEntity"},"query":{},"deeplink":{"rel":"update","href":"/mockdata/experiments/{exp}","method":"PATCH"}},"Delete":{"description":"Delete a Experiment","rpc_name":"DeleteExperiment","data":{"request":"google.protobuf.Empty","response":"google.protobuf.Empty"},"query":{},"deeplink":{"rel":"delete","href":"/mockdata/experiments/{exp}","method":"DELETE"}}}}}
export const Types ={"tree.Tree":{"name":"tree","type":"Tree","description":"Navigation tree type with recursive navigation nodes","__proto":{"package":"tree","imports":[],"targetfile":"tree.proto"},"fields":{"id":{"description":"Id of the tree","type":"string","__proto":{"number":1}},"display_name":{"description":"String representation of the tree","type":"string","meta":{"readonly":true,"tree-search-index":true},"__proto":{"number":2}},"description":{"description":"description of the tree","meta":{"tree-search-index":true},"type":"string","__proto":{"number":3}},"root":{"description":"Rootnode of the tree","type":"tree.Navigationnode","meta":{},"__proto":{"number":10}}}},"tree.TreeEntity":{"name":"tree_entity","type":"TreeEntity","description":"TreeEntity with Tree","__proto":{"package":"tree","imports":["furo/meta.proto","furo/link.proto"],"targetfile":"tree.proto"},"fields":{"data":{"description":"contains a tree.Tree","type":"tree.Tree","__proto":{"number":1}},"links":{"description":"Hateoas links","type":"furo.Link","meta":{"repeated":true},"__proto":{"number":2}},"meta":{"description":"Meta for the response","type":"furo.Meta","__proto":{"number":3}}}},"tree.Navigationnode":{"name":"navigationnode","type":"Navigationnode","description":"Item of the navigationtree","__proto":{"package":"tree","imports":["furo/link.proto"],"targetfile":"tree.proto"},"fields":{"id":{"description":"Id of the node","type":"string","__proto":{"number":1}},"display_name":{"description":"String representation of the node","type":"string","meta":{"readonly":true,"tree-search-index":true},"__proto":{"number":2}},"secondary_text":{"description":"Secondary text of the node","type":"string","meta":{"tree-search-index":true},"__proto":{"number":3}},"description":{"description":"description of the node","meta":{"tree-search-index":true},"type":"string","__proto":{"number":4}},"icon":{"description":"icon of the node","type":"string","__proto":{"number":5}},"panel":{"description":"Which panel (i.e. view, edit, display) opens the node type (which is defined in property link)","type":"string","meta":{"readonly":true,"tree-search-index":false},"__proto":{"number":6}},"key_words":{"description":"key words of the node","meta":{"tree-search-index":true},"type":"string","__proto":{"number":7}},"has_error":{"description":"if node has error","type":"bool","__proto":{"number":8}},"open":{"description":"node is open or not","type":"bool","__proto":{"number":9}},"link":{"description":"Deeplink information of this node","type":"furo.Link","__proto":{"number":10}},"is_group_label":{"description":"This node is a group label","type":"bool","meta":{"default":false},"__proto":{"number":11}},"children":{"description":"Children of this node","type":"tree.Navigationnode","meta":{"repeated":true},"__proto":{"number":12}}}},"tree.TreeCollection":{"name":"tree_collection","type":"TreeCollection","description":"TreeCollection with repeated TreeEntity","__proto":{"package":"tree","imports":["furo/meta.proto","furo/link.proto"],"targetfile":"tree.proto"},"fields":{"meta":{"description":"Meta for the response","type":"furo.Meta","__proto":{"number":2}},"links":{"description":"Hateoas links","type":"furo.Link","meta":{"repeated":true},"__proto":{"number":3}},"entities":{"description":"Contains a tree.TreeEntity repeated","type":"tree.TreeEntity","meta":{"repeated":true},"__proto":{"number":4}}}},"person.Person":{"name":"person","type":"Person","description":"Person message type","__proto":{"package":"person","imports":[],"targetfile":"person.proto"},"fields":{"id":{"description":"Identity of a person","type":"string","meta":{"label":"Person","default":"","hint":"","readonly":true},"constraints":{},"__proto":{"number":1}},"display_name":{"description":"Localized String representation of a person","type":"string","meta":{"label":"Person","default":"","hint":"","readonly":true},"constraints":{},"__proto":{"number":2}},"name":{"description":"Name of a person","type":"string","meta":{"label":"Name","default":"","hint":""},"constraints":{"required":true},"__proto":{"number":3}},"first_name":{"description":"First name of a person","type":"string","meta":{"label":"First name","default":"","hint":""},"constraints":{},"__proto":{"number":4},"__ui":{"component":"furo-data-text-input"}},"phone_nr":{"description":"Internal phone number","type":"string","meta":{"label":"Phone No","default":"","hint":""},"constraints":{},"__proto":{"number":5}},"skills":{"description":"List of main skills of a person","type":"string","meta":{"label":"Skills","default":"","hint":"","repeated":true},"constraints":{},"__proto":{"number":6}}}},"person.PersonCollection":{"name":"person_collection","type":"PersonCollection","description":"PersonCollection with repeated PersonEntity","__proto":{"package":"person","imports":["furo/meta.proto","furo/link.proto"],"targetfile":"person.proto"},"fields":{"meta":{"description":"Meta for the response","type":"furo.Meta","__proto":{"number":2}},"links":{"description":"Hateoas links","type":"furo.Link","meta":{"repeated":true},"__proto":{"number":3}},"entities":{"description":"Contains a person.PersonEntity repeated","type":"person.PersonEntity","meta":{"repeated":true},"__proto":{"number":4}}}},"person.PersonEntity":{"name":"person_entity","type":"PersonEntity","description":"PersonEntity with Person","__proto":{"package":"person","imports":["furo/meta.proto","furo/link.proto"],"targetfile":"person.proto"},"fields":{"data":{"description":"contains a person.Person","type":"person.Person","__proto":{"number":1}},"links":{"description":"Hateoas links","type":"furo.Link","meta":{"repeated":true},"__proto":{"number":2}},"meta":{"description":"Meta for the response","type":"furo.Meta","__proto":{"number":3}}}},"project.ProjectCollection":{"name":"project_collection","type":"ProjectCollection","description":"ProjectCollection with repeated ProjectEntity","__proto":{"package":"project","imports":["furo/meta.proto","furo/link.proto"],"targetfile":"project.proto"},"fields":{"meta":{"description":"Meta for the response","type":"furo.Meta","__proto":{"number":2}},"links":{"description":"Hateoas links","type":"furo.Link","meta":{"repeated":true},"__proto":{"number":3}},"entities":{"description":"Contains a project.ProjectEntity repeated","type":"project.ProjectEntity","meta":{"repeated":true},"__proto":{"number":4}}}},"project.ProjectEntity":{"name":"project_entity","type":"ProjectEntity","description":"ProjectEntity with Project","__proto":{"package":"project","imports":["furo/meta.proto","furo/link.proto"],"targetfile":"project.proto"},"fields":{"data":{"description":"contains a project.Project","type":"project.Project","__proto":{"number":1}},"links":{"description":"Hateoas links","type":"furo.Link","meta":{"repeated":true},"__proto":{"number":2}},"meta":{"description":"Meta for the response","type":"furo.Meta","__proto":{"number":3}}}},"project.Project":{"name":"project","type":"Project","description":"Project description","__proto":{"package":"project","imports":["google/type/money.proto","google/type/date.proto","person/person.proto"],"targetfile":"project.proto"},"fields":{"id":{"description":"Identity of a project","type":"string","meta":{"label":"Id","default":"","hint":"","readonly":true},"constraints":{},"__proto":{"number":1}},"display_name":{"description":"Localized String representation of a project","type":"string","meta":{"label":"Project","default":"","hint":"","readonly":true},"constraints":{},"__proto":{"number":2}},"start":{"description":"Start date of the project","type":"google.type.Date","meta":{"label":"Project start","default":"","hint":""},"constraints":{},"__proto":{"number":3}},"end":{"description":"Prospective end date of the project","type":"google.type.Date","meta":{"label":"Project end","default":"","hint":""},"constraints":{},"__proto":{"number":4}},"description":{"description":"Short project description","type":"string","meta":{"label":"Description","default":"","hint":""},"constraints":{},"__proto":{"number":5}},"members":{"description":"List of project members","type":"person.Person","meta":{"label":"Project members","default":"","hint":"","repeated":true},"constraints":{},"__proto":{"number":6}},"cost_limit":{"description":"Project cost limit","type":"google.type.Money","meta":{"label":"Cost limit","default":"","hint":""},"constraints":{"required":true,"max":{"value":25000,"message":"max 25000"}},"__proto":{"number":7}}}},"task.TaskEntity":{"name":"task_entity","type":"TaskEntity","description":"TaskEntity with Task","__proto":{"package":"task","options":{},"imports":["furo/meta.proto","furo/link.proto"],"targetfile":"task.proto"},"fields":{"data":{"description":"contains a task.Task","type":"task.Task","__proto":{"number":1}},"links":{"description":"Hateoas links","type":"furo.Link","meta":{"repeated":true},"__proto":{"number":2}},"meta":{"description":"Meta for the response","type":"furo.Meta","__proto":{"number":3}}}},"task.TaskCollection":{"name":"task_collection","type":"TaskCollection","description":"TaskCollection with repeated TaskEntity","__proto":{"package":"task","options":{},"imports":["furo/meta.proto","furo/link.proto"],"targetfile":"task.proto"},"fields":{"meta":{"description":"Meta for the response","type":"furo.Meta","__proto":{"number":2}},"links":{"description":"Hateoas links","type":"furo.Link","meta":{"repeated":true},"__proto":{"number":3}},"entities":{"description":"Contains a task.TaskEntity repeated","type":"task.TaskEntity","meta":{"repeated":true},"__proto":{"number":4}}}},"task.Task":{"name":"task","type":"Task","description":"Task data description","__proto":{"package":"task","imports":["furo/reference.proto"],"targetfile":"task.proto"},"fields":{"id":{"description":"Identity of a task","type":"string","meta":{"label":"Id","default":"","hint":"","readonly":true},"constraints":{},"__proto":{"number":1}},"display_name":{"description":"Localized String representation of a task","type":"string","meta":{"label":"task.display_name.label","default":"","hint":"task.display_name.hint","readonly":true},"constraints":{},"__proto":{"number":2}},"description":{"description":"Short task description","type":"string","meta":{"label":"task.desc.label","default":"","hint":""},"constraints":{"required":true,"max":{"value":180,"message":"task.desc.maxlength"}},"__proto":{"number":3}},"estimated_time":{"description":"Estimated time in days","type":"int","meta":{"label":"Est. days","default":"","hint":""},"constraints":{},"__proto":{"number":4,"type":"int32"}},"owner":{"description":"Owner of a task","type":"furo.Reference","meta":{"min_term_length":4,"label":"Owner","default":{"link":{"rel":"list","href":"/mockdata/persons/list.json","method":"Get","type":"person.Person"}},"hint":""},"constraints":{},"__proto":{"number":5}},"subtasks":{"description":"List of subtasks","type":"task.Task","meta":{"label":"Subtask","default":"","hint":"","repeated":true},"constraints":{},"__proto":{"number":6}}}},"experiment.ExperimentEntity":{"name":"experiment_entity","type":"ExperimentEntity","description":"ExperimentEntity with Experiment","__proto":{"package":"experiment","options":{},"imports":["furo/meta.proto","furo/link.proto"],"targetfile":"experiment.proto"},"fields":{"data":{"description":"contains a experiment.Experiment","type":"experiment.Experiment","__proto":{"number":1}},"links":{"description":"Hateoas links","type":"furo.Link","meta":{"repeated":true},"__proto":{"number":2}},"meta":{"description":"Meta for the response","type":"furo.Meta","__proto":{"number":3}}}},"experiment.Experiment":{"name":"experiment","type":"Experiment","description":"experiment spec for testing","__proto":{"package":"experiment","imports":["google/protobuf/any.proto","google/type/date.proto","furo/property.proto"],"targetfile":"experiment.proto"},"fields":{"id":{"description":"Identity of a experiment","type":"string","meta":{"label":"Id","default":"","hint":"","readonly":true},"constraints":{},"__proto":{"number":1}},"display_name":{"description":"Localized String representation of a experiment","type":"string","meta":{"label":"experiment","default":"","hint":"","readonly":true},"constraints":{},"__proto":{"number":2}},"description":{"description":"Short experiment description","type":"string","meta":{"label":"Description","default":"","hint":""},"constraints":{},"__proto":{"number":3}},"furo_data_checkbox_input":{"description":"field for furo_data_checkbox_input for testing","type":"bool","meta":{"label":"checkbox_input","default":"","hint":"Hint","readonly":false},"constraints":{},"__proto":{"number":4}},"furo_data_text_input":{"description":"field for furo_data_text_input for testing","type":"string","meta":{"label":"text_input","hint":"hint","readonly":false},"constraints":{"required":true,"min":{"value":3,"message":"at least 3 characters"},"max":{"value":15,"message":"15 characters maximum"},"pattern":{"value":"a.*","message":"must start with a"}},"__proto":{"number":5}},"furo_data_textarea_input":{"description":"field for furo_data_textarea_input for testing","type":"string","meta":{"label":"textarea_input","hint":"hint","readonly":false,"rows":3,"cols":100},"constraints":{},"__proto":{"number":6}},"furo_data_time_input":{"description":"field for furo-data-time-input for testing","type":"string","meta":{"label":"time-input","hint":"hint","readonly":false},"constraints":{"min":{"value":"05:00","message":"From 05:00"},"max":{"value":"19:00","message":"to 19:00"},"step":{"value":"5","message":"step 5"}},"__proto":{"number":7}},"furo_data_range_input":{"description":"field for furo-data-range-input for testing","type":"string","meta":{"label":"range-input","hint":"hint","readonly":false},"constraints":{"min":{"value":20,"message":"From 20"},"max":{"value":50,"message":"to 50"},"step":{"value":"2.5","message":"step 2.5"}},"__proto":{"number":8}},"furo_data_number_input":{"description":"field for furo-data-number-input for testing","type":"float","meta":{"label":"number-input","hint":"hint","readonly":false},"constraints":{"min":{"value":1,"message":"from 1"},"max":{"value":555,"message":"to 555"},"step":{"value":"3","message":"step 3"}},"__proto":{"number":9}},"furo_data_color_input":{"description":"field for furo-data-color-input for testing","type":"string","meta":{"label":"color-input","hint":"hint","readonly":false},"constraints":{},"__proto":{"number":10}},"furo_data_password_input":{"description":"field for furo-data-password-input for testing","type":"string","meta":{"label":"password-input","hint":"hint","readonly":false},"constraints":{"min":{"value":6,"message":"min 6"},"max":{"value":15,"message":"max 15"}},"__proto":{"number":11}},"furo_data_search_input":{"description":"field for furo-search-input for testing","type":"string","meta":{"label":" search","hint":"hint","readonly":false},"constraints":{"min":{"value":1,"message":"min 1"},"max":{"value":15,"message":"max 15"},"pattern":{"value":"a.*","message":"must start with a"}},"__proto":{"number":12}},"furo_data_date_input":{"description":"field for furo-data-date-input for testing","type":"string","meta":{"label":"date-input","hint":"hint","readonly":false},"constraints":{"min":{"value":"1800-01-01","message":"The earliest date to accept is 1800-01-01"},"max":{"value":"2099-12-31","message":"The latest date to accept is 2099-12-31"},"step":{"value":"5","message":"step 5"}},"__proto":{"number":13}},"furo_data_bool_icon":{"description":"field for furo-data-bool-icon for testing","type":"bool","meta":{"label":"bool-icon input","hint":"hint","readonly":false},"constraints":{},"__proto":{"number":14}},"the_any_type":{"description":"field for testing any","type":"google.protobuf.Any","meta":{"label":"can be anything","hint":"hint","readonly":false},"constraints":{},"__proto":{"number":15}},"type_with_options":{"description":"field for testing static options","type":"string","meta":{"label":"String options","hint":"Choose one","options":{"list":["option_1","option_2","option_3"]}},"constraints":{},"__proto":{"number":16}},"type_property":{"description":"field for testing property","type":"furo.Property","meta":{"label":"Additional fields","repeated":true},"constraints":{},"__proto":{"number":17}},"furo_data_date_input_google":{"description":"field for furo-data-date-input for testing","type":"google.type.Date","meta":{"label":"gogole-date-input","hint":"hint","readonly":false},"constraints":{"min":{"value":"1800-01-01","message":"The earliest date to accept is 1800-01-01"},"max":{"value":"2099-12-31","message":"The latest date to accept is 2099-12-31"},"step":{"value":"2","message":"step 2"}},"__proto":{"number":18}},"single_type_property":{"description":"field for testing property","type":"furo.Property","meta":{"label":"Additional fields"},"constraints":{},"__proto":{"number":19}}}},"experiment.Default":{"name":"experiment","type":"Default","description":"Test the default value","__proto":{"package":"experiment","imports":["google/protobuf/any.proto"],"targetfile":"experiment.proto"},"fields":{"id":{"description":"Identity of a experiment","type":"string","meta":{"label":"Id","default":"","hint":"","readonly":true},"constraints":{},"__proto":{"number":1}},"display_name":{"description":"Localized String representation of a experiment","type":"string","meta":{"label":"experiment","default":"","hint":"","readonly":true},"constraints":{},"__proto":{"number":2}},"description":{"description":"Short experiment description","type":"string","meta":{"label":"Description","default":"Ein text per default","hint":""},"constraints":{},"__proto":{"number":3}},"repstring":{"description":"repeated string","type":"string","meta":{"repeated":true,"label":"Description","default":"Ein text per default","hint":""},"constraints":{},"__proto":{"number":4}}}},"experiment.Recursive":{"name":"recursive","type":"Recursive","description":"recursive type for testing","__proto":{"package":"experiment","imports":["google/protobuf/any.proto","google/type/date.proto"],"targetfile":"experiment.proto"},"fields":{"id":{"description":"Identity","type":"string","meta":{"label":"Id","default":"","hint":"","readonly":false},"constraints":{},"__proto":{"number":1}},"display_name":{"description":"Localized String representation","type":"string","meta":{"label":"experiment","default":"","hint":"","readonly":false},"constraints":{},"__proto":{"number":2}},"recursion":{"description":"The recursion","type":"experiment.Recursive","meta":{"label":"Recursio"},"constraints":{},"__proto":{"number":3}}}},"experiment.ExperimentCollection":{"name":"experiment_collection","type":"ExperimentCollection","description":"ExperimentCollection with repeated ExperimentEntity","__proto":{"package":"experiment","options":{},"imports":["furo/meta.proto","furo/link.proto"],"targetfile":"experiment.proto"},"fields":{"meta":{"description":"Meta for the response","type":"furo.Meta","__proto":{"number":2}},"links":{"description":"Hateoas links","type":"furo.Link","meta":{"repeated":true},"__proto":{"number":3}},"entities":{"description":"Contains a experiment.ExperimentEntity repeated","type":"experiment.ExperimentEntity","meta":{"repeated":true},"__proto":{"number":4}}}},"furo.Reference":{"name":"reference","type":"Reference","description":"reference","__proto":{"package":"furo","imports":["furo/link.proto"],"targetfile":"reference.proto"},"fields":{"display_name":{"description":"String representation of the reference","type":"string","meta":{"readonly":true},"constraints":{},"__proto":{"number":1}},"id":{"description":"Id of the reference","type":"string","__proto":{"number":2}},"link":{"description":"Hateoas link","type":"furo.Link","__proto":{"number":3}}}},"furo.MetaField":{"name":"metafield","type":"MetaField","description":"fields of meta info","__proto":{"package":"furo","imports":[],"targetfile":"meta.proto"},"fields":{"meta":{"description":"meta information of a field","type":"map<string,string>","__proto":{"number":1,"map_from":"string","map_to":"string"}},"constraints":{"description":"constrain of a field","type":"map<string,furo.FieldConstraint>","__proto":{"number":2,"map_from":"string","map_to":"furo.FieldConstraint"}}}},"furo.StringOptionProperty":{"name":"string_option_property","type":"StringOptionProperty","description":"String type to use in property","__proto":{"package":"furo","imports":[],"targetfile":"property.proto"},"fields":{"display_name":{"description":"String representation of val","type":"string","meta":{"readonly":true},"constraints":{},"__proto":{"number":1}},"id":{"description":"The value, Id is used to make working with data-inputs easyier","type":"string","__proto":{"number":2}}}},"furo.NumberProperty":{"name":"number_property","type":"NumberProperty","description":"Number type with embedded meta","__proto":{"package":"furo","imports":[],"targetfile":"property.proto"},"fields":{"data":{"description":"data part","type":"number","__proto":{"number":1,"type":"float"}}}},"furo.StringProperty":{"name":"string_property","type":"StringProperty","description":"String type to use in property","__proto":{"package":"furo","imports":["furo/meta.proto"],"targetfile":"property.proto"},"fields":{"data":{"description":"data part","type":"string","__proto":{"number":1}}}},"furo.Meta":{"name":"meta","type":"Meta","description":"meta info","__proto":{"package":"furo","imports":[],"targetfile":"meta.proto"},"fields":{"fields":{"description":"fields of meta info","type":"map<string, furo.MetaField>","__proto":{"number":1,"map_from":"string","map_to":"furo.MetaField"}}}},"furo.IntegerProperty":{"name":"integer_property","type":"IntegerProperty","description":"Integer type with embedded meta","__proto":{"package":"furo","imports":[],"targetfile":"property.proto"},"fields":{"data":{"description":"Integer data part","type":"number","constraints":{"step":{"value":1}},"__proto":{"number":1,"type":"int32"}}}},"furo.Link":{"name":"link","type":"Link","description":"link","__proto":{"package":"furo","imports":[],"targetfile":"link.proto"},"fields":{"rel":{"description":"the relationship","type":"string","__proto":{"number":1}},"method":{"description":"method of curl","type":"string","__proto":{"number":2}},"href":{"description":"link","type":"string","__proto":{"number":3}},"type":{"description":"mime type","type":"string","__proto":{"number":4}}}},"furo.FieldConstraint":{"name":"fieldconstraint","type":"FieldConstraint","description":"constrains of fields","__proto":{"package":"furo","imports":[],"targetfile":"meta.proto"},"fields":{"constraint":{"description":"constrain of a field","type":"map<string,string>","__proto":{"number":1,"map_from":"string","map_to":"string"}}}},"furo.Property":{"name":"property","type":"Property","description":"Type to define property values with type information","__proto":{"package":"furo","imports":["google/protobuf/any.proto"],"targetfile":"property.proto"},"fields":{"id":{"description":"Id of the property","type":"string","meta":{"label":"Id","readonly":true},"constraints":{},"__proto":{"number":1}},"display_name":{"description":"String representation of the property","type":"string","meta":{"label":"Property","readonly":true},"constraints":{},"__proto":{"number":2}},"data":{"description":"data part of the property","type":"google.protobuf.Any","constraints":{},"__proto":{"number":3}},"meta":{"description":"Meta for the response","type":"furo.Meta","__proto":{"number":4}},"code":{"description":"property code for additional settings","type":"string","__proto":{"number":5}}}},"google.type.Money":{"name":"money","type":"Money","description":"Represents an amount of money with its currency type. https://github.com/googleapis/googleapis/blob/master/google/money.proto","__proto":{"package":"google.type","imports":[],"targetfile":"money.proto"},"fields":{"display_name":{"description":"String representation of money entity","type":"string","meta":{"default":"","hint":"","readonly":true},"constraints":{},"options":[],"__proto":{"number":1}},"currency_code":{"description":"The 3-letter currency code defined in ISO 4217.","type":"string","meta":{"label":"Währungscode","default":"","hint":""},"constraints":{},"options":[],"__proto":{"number":2}},"units":{"description":"The whole units of the amount.","type":"int","meta":{"label":"Ganzahliger Währungsbetrag","default":"","hint":""},"constraints":{},"options":[],"__proto":{"number":3,"type":"int64"}},"nanos":{"description":"Number of nano (10^-9) units of the amount. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000.","type":"int","meta":{"label":"Nanos","default":"","hint":""},"constraints":{},"options":[],"__proto":{"number":4,"type":"int64"}}}},"google.type.Date":{"name":"date","type":"Date","description":"Date, https://github.com/googleapis/googleapis/blob/master/google/date.proto ","__proto":{"package":"google.type","imports":[],"targetfile":"date.proto"},"fields":{"display_name":{"description":"Localized String representation of date","type":"string","meta":{"label":"Datum","default":"","hint":"","readonly":true},"constraints":{},"options":[],"__proto":{"number":4}},"year":{"description":"Year of date. Must be from 1 to 9999, or 0 if specifying a date without a year.","type":"int","meta":{"default":"","hint":""},"constraints":{},"options":[],"__proto":{"number":1,"type":"int32"}},"month":{"description":"Month of year. Must be from 1 to 12, or 0 if specifying a year without a month and day.","type":"int","meta":{"default":"","hint":""},"constraints":{},"options":[],"__proto":{"number":2,"type":"int32"}},"day":{"description":"Day of month. Must be from 1 to 31 and valid for the year and month, or 0. if specifying a year by itself or a year and month where the day is not significant.","type":"int","meta":{"default":"","hint":""},"constraints":{},"options":[],"__proto":{"number":3,"type":"int32"}}}},"google.protobuf.Empty":{"name":"empty","type":"Empty","description":"https://github.com/protocolbuffers/protobuf/blob/master/src/protobuf/empty.proto","__proto":{"package":"google.protobuf","imports":[],"targetfile":"empty.proto","options":{}},"fields":{}},"google.protobuf.Any":{"name":"any","type":"Any","description":"Any` contains an arbitrary serialized protocol buffer message along with a\n// URL that describes the type of the serialized message. https://github.com/protocolbuffers/protobuf/blob/master/src/google/protobuf/any.proto","__proto":{"package":"google.protobuf","options":{},"imports":[],"targetfile":"any.proto"},"fields":{"type_url":{"type":"string","__proto":{"number":1}},"value":{"type":"ArrayBuffer","__proto":{"number":2,"type":"bytes"}}}}}