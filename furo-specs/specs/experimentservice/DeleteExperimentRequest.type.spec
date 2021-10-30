name: DeleteExperimentRequest
type: DeleteExperimentRequest
description: request message for DeleteExperiment
lifecycle: null
__proto:
    package: experimentservice
    targetfile: reqmsgs.proto
    imports:
        - google/protobuf/empty.proto
    options:
        go_package: github.com/eclipse/eclipsefuro-web/furo-specs/dist/pb/experimentservice;experimentservicepb
        java_multiple_files: "true"
        java_outer_classname: ReqmsgsProto
        java_package: com.example.tutorial.experimentservice
fields:
    body:
        type: .google.protobuf.Empty
        description: Body with google.protobuf.Empty
        __proto:
            number: 1
        __ui: null
        meta:
            default: ""
            placeholder: experimentservice.deleteexperimentrequest.body.placeholder
            hint: ""
            label: experimentservice.deleteexperimentrequest.body.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
