import { fixture, html } from '@open-wc/testing';
import { assert } from '@esm-bundle/chai';

import '../src/furo-catalog.js';
import '@furo/fbp/src/flow-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import './initEnv.js';

const testJSONResponse = {
  "data": {
    "description": "experiment data for testing",
    "display_name": "display_name",
    "id": "1",
    "furo_data_checkbox_input": true,
    "furo_data_text_input": "hallo test",
    "furo_data_number_input": 12.55,
    "furo_data_time_input": "17:34",
    "furo_data_color_input": "#e318ed",
    "furo_data_textarea_input": "hallo , this is textarea input",
    "furo_data_date_input": "2019-02-22",
    "furo_data_date_input_google": {
      "day": 31,
      "display_name": "31.12.2020",
      "month": 12,
      "year": 2020
    },
    "furo_data_range_input": 31,
    "furo_data_bool_icon": false,
    "type_property": [
      {
        "code": "c0a7f550-0fbe-4046-8fa9-60c86327b6b1",
        "data": {
          "@type": "type.furo.com/furo.StringProperty",
          "data": "01012020"
        },
        "display_name": "Vertragsbeginn",
        "id": "a396a165-ebf9-4bd5-870f-9f09a929f9f9",
        "meta": {
          "fields": {
            "data.data": {
              "constraints": {
                "required": {
                  "is": "true",
                  "message": "Bitte ausfüllen!"
                }
              },
              "meta": {
                "label": "Vertragsbeginn",
                "readonly": true
              }
            },
            "is_overwritten": {"meta": {"label": "Custom overridden label"}},
            "meta": {
              "meta": {
                "readonly": true
              }
            }
          }
        }
      },
      {
        "data": {
          "@type": "xx/furo.NumberProperty",
          "data": 34.23,
          "display_name": "34.23"
        },
        "display_name": "Display",
        "id": "bb",
        "code": "option",
        "meta": {
          "fields": {
            "data.data": {
              "constraints": {
                "required": {
                  "is": "true",
                  "message": "Bitte ausfüllen!"
                }
              },
              "meta": {
                "label": "Float",
                "hint": "Type in int",
                "readonly": true
              }
            }
          }
        }
      },
      {
        "data": {
          "@type": "xx/furo.IntegerProperty",
          "data": 342,
          "display_name": "342"
        },
        "display_name": "Display",
        "id": "op33t",
        "code": "option",
        "meta": {
          "fields": {
            "data.data": {
              "meta": {
                "label": "Integer",
                "hint": "Type in int"
              }
            }
          }
        }
      },
      {
        "data": {
          "@type": "xx/furo.StringOptionProperty",
          "id": "bb",
          "display_name": "Display"
        },
        "display_name": "Display",
        "id": "444",
        "code": "option",
        "meta": {
          "fields": {
            "data": {
              "meta": {
                "label": "Please select",
                "hint": "datehint is data",
                "repeated": false,
                "options": {
                  "list": [
                    {
                      "id": "",
                      "display_name": "Please select"
                    },
                    {
                      "id": "aa",
                      "display_name": "The display a"
                    },
                    {
                      "id": "bb",
                      "display_name": "The display b"
                    }
                  ]
                }
              }
            }
          }
        }
      },
      {
        "data": {
          "@type": "xx/furo.StringProperty",
          "data": "32 32 23",
          "display_name": "a date"
        },
        "id": "bv3",
        "code": "date",
        "meta": {
          "fields": {
            "data.data": {
              "meta": {
                "label": "repeated fields",
                "hint": "this is data"
              }
            }
          }
        }
      }
    ],
    "single_type_property": {
      "data": {
        "@type": "xx/google.type.Date",
        "day": 8,
        "month": 11,
        "year": 2022,
        "display_name": "8.11.2022"
      },
      "display_name": "a date",
      "id": "date",
      "code": "date",
      "meta": {
        "fields": {
          "data": {
            "meta": {
              "label": "Additional fields",
              "hint": "this is data"
            },
            "constraints": {
              "min": {
                "is": "2019-09-09",
                "message": "to small"
              }
            }
          }
        }
      }
    },
    "repstring": [
      "AAA",
      "BBBB",
      "CCCC"
    ],
    "furo_data_money_input": {
      "currency_code": "CHF",
      "units": 3333,
      "nanos": 75100000
    }
  },
  "meta": {
    "fields": {
      "data.furo_data_color_input": {
        "meta": {
          "readonly": true
        }
      },
      "data.type_property": {
        "meta": {
          "label": "Label from response"
        }
      }
    }
  },
  "links": [
    {
      "href": "https://httpbin.org/anything",
      "method": "POST",
      "rel": "create",
      "type": "experiment.ExperimentEntity",
      "service": "ExperimentService"
    }
  ]
}

describe('furo-data-object-meta', () => {
  let element;
  let host;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <flow-bind>
        <template>
          <furo-data-object type='experiment.ExperimentEntity'></furo-data-object>
        </template>
      </flow-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, element] = testbind.parentNode.children;
    await host.updateComplete;
    await element.updateComplete;
  });

  it('dao should apply meta data from response root level', done => {
    const handler = () => {
      assert.equal(element.data.data.furo_data_color_input._meta.readonly, true);
      assert.equal(element.data.data.furo_data_color_input._meta.label, "color-input**");

      assert.equal(element.data.data.type_property._meta.label, "Label from response");

      done();
    };
    element.addEventListener('data-injected', handler, { once: true });

    element.injectRaw(testJSONResponse);
  });

  it('dao should apply meta data from FieldNode level', done => {
    const handler = () => {
      assert.equal(element.data.data.type_property.repeats[0].is_overwritten._meta.label, "Custom overridden label");
      assert.equal(element.data.data.type_property.repeats[0].data.data._meta.label, "Vertragsbeginn");
      assert.equal(element.data.data.type_property.repeats[0].data.data._meta.readonly, true);

      done();
    };
    element.addEventListener('data-injected', handler, { once: true });

    element.injectRaw(testJSONResponse);
  });

});
