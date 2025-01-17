import { fixture, html } from '@open-wc/testing';
import { assert } from '@esm-bundle/chai';

import '../src/furo-catalog.js';
import '@furo/fbp/src/flow-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import './initEnv.js';

describe('furo-collection-agent', () => {
  let element;
  let host;
  let dataObject;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <flow-bind>
        <template>
          <furo-collection-agent></furo-collection-agent>
          <furo-data-object @-object-ready="--doReady"></furo-data-object>
        </template>
      </flow-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, element, dataObject] = testbind.parentNode.children;
    await host.updateComplete;
    await element.updateComplete;
    await dataObject.updateComplete;
  });

  it('should be a furo-collection-agent', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(element.nodeName.toLowerCase(), 'furo-collection-agent');
    done();
  });

  it('should not accept an unkonwn service', done => {
    element.setAttribute('service', 'unknown');
    assert.equal(element._service, undefined);
    done();
  });

  it('should accept additional QueryParams Object', done => {
    element.setAttribute('service', 'TaskService');
    element.updateQp({ on: true });
    element.updateQp({ level: '5' });

    /**
     * Register hook on wire --triggerLoad to
     *
     */
    element._FBPAddWireHook('--triggerLoad', req => {
      assert.equal(req.url.indexOf('on=true') > 0, true);
      assert.equal(req.url.indexOf('level=5') > 0, true);
      done();
    });

    element.htsIn([
      {
        href: '/mockdata/tasks/list.json',
        method: 'GET',
        rel: 'list',
        type: 'task.TaskCollection',
        service: 'TaskService',
      },
    ]);
    element.load();
  });

  it('should accept clearing of QueryParams ', done => {
    element.setAttribute('service', 'TaskService');
    element.updateQp({ on: true });
    element.updateQp({ level: '5' });
    element.clearQp();

    /**
     * Register hook on wire --triggerLoad to
     *
     */
    element._FBPAddWireHook('--triggerLoad', req => {
      assert.equal(req.url.indexOf('on=true') > 0, false);
      assert.equal(req.url.indexOf('level=5') > 0, false);
      done();
    });

    element.htsIn([
      {
        href: '/mockdata/tasks/list.json',
        method: 'GET',
        rel: 'list',
        type: 'task.TaskCollection',
        service: 'TaskService',
      },
    ]);
    element.load();
  });

  it('should replace existing query params with transferred key value object ', done => {
    element.setAttribute('service', 'TaskService');
    element.updateQp({ on: true });
    element.updateQp({ level: '5' });
    element.setQp({ id: '4711' });

    /**
     * Register hook on wire --triggerLoad to
     */
    element._FBPAddWireHook('--triggerLoad', req => {
      assert.equal(req.url.indexOf('on=true') > 0, false);
      assert.equal(req.url.indexOf('level=5') > 0, false);
      assert.equal(req.url.indexOf('id=4711') > 0, true);
      done();
    });

    element.htsIn([
      {
        href: '/mockdata/tasks/list.json',
        method: 'GET',
        rel: 'list',
        type: 'task.TaskCollection',
        service: 'TaskService',
      },
    ]);
    element.load();
  });

  it('undefined query param object results in an empty queryParams object ', done => {
    element.setAttribute('service', 'TaskService');
    element.updateQp({ on: true });
    element.updateQp({ level: '5' });
    element.setQp(undefined);

    /**
     * Register hook on wire --triggerLoad to
     */
    element._FBPAddWireHook('--triggerLoad', req => {
      assert.equal(req.url.indexOf('on=true') > 0, false);
      assert.equal(req.url.indexOf('level=5') > 0, false);
      assert.equal(
        typeof element._queryParams === 'object' &&
          !Array.isArray(element._queryParams) &&
          element._queryParams !== null,
        true,
      );
      done();
    });

    element.htsIn([
      {
        href: '/mockdata/tasks/list.json',
        method: 'GET',
        rel: 'list',
        type: 'task.TaskCollection',
        service: 'TaskService',
      },
    ]);
    element.load();
  });

  it('should send search with ?q= ', done => {
    element.setAttribute('service', 'TaskService');
    element.setOrderBy('id,    -display_name');
    element.setFields('display_name');
    /**
     * Register hook on wire --triggerLoad to
     *
     */
    element._FBPAddWireHook('--triggerLoad', req => {
      assert.equal(req.url.indexOf('order_by=id,-display_name') > 0, true);
      assert.equal(req.url.indexOf('fields=display_name') > 0, true);
      assert.equal(req.url.indexOf('q=a%20better%20life') > 0, true);
      done();
    });

    element.htsIn([
      {
        href: '/mockdata/tasks/list.json',
        method: 'GET',
        rel: 'list',
        type: 'task.TaskCollection',
        service: 'TaskService',
      },
    ]);
    element.search('a better life');
  });

  it('should send filter, field, order_by and page_size together ', done => {
    element.setAttribute('service', 'TaskService');
    element.setFilter([['id', 'eq', '1']]);
    element.setOrderBy('id,    -display_name');
    element.setFields('display_name');
    element.setPageSize(15);
    /**
     * Register hook on wire --triggerLoad to
     *
     */
    element._FBPAddWireHook('--triggerLoad', req => {
      assert.equal(req.url.indexOf('order_by=id,-display_name') > 0, true);
      assert.equal(req.url.indexOf('filter=[[%22id%22,%22eq%22,%221%22]]') > 0, true);
      assert.equal(req.url.indexOf('fields=display_name') > 0, true);
      assert.equal(req.url.indexOf('page_size=15') > 0, true);
      done();
    });

    element.htsIn([
      {
        href: '/mockdata/tasks/list.json',
        method: 'GET',
        rel: 'list',
        type: 'task.TaskCollection',
        service: 'TaskService',
      },
    ]);
    element.load();
  });

  it('should send filter request URL friendly', done => {
    element.setAttribute('service', 'TaskService');
    element.setFilter([
      ['id', 'eq', '33333'],
      ['display_name', 'con', 'done'],
    ]);
    element.setFilter([
      ['id', 'eq', '1'],
      ['display_name', 'con', 'done'],
    ]);

    /**
     * Register hook on wire --triggerLoad to
     *
     */
    element._FBPAddWireHook('--triggerLoad', req => {
      assert.equal(
        req.url.indexOf(
          'filter=[[%22id%22,%22eq%22,%221%22],[%22display_name%22,%22con%22,%22done%22]]',
        ) > 0,
        true,
      );
      done();
    });

    element.htsIn([
      {
        href: '/mockdata/tasks/list.json',
        method: 'GET',
        rel: 'list',
        type: 'task.TaskCollection',
        service: 'TaskService',
      },
    ]);
    element.load();
  });
  it('should clear filter ', done => {
    element.setAttribute('service', 'TaskService');
    element.setFilter([
      ['id', 'eq', '1'],
      ['display_name', 'con', 'done'],
    ]);
    element.clearFilter();
    /**
     * Register hook on wire --triggerLoad to
     *
     */
    element._FBPAddWireHook('--triggerLoad', req => {
      assert.equal(
        req.url.indexOf(
          'filter=[[%22id%22,%22eq%22,%221%22],[%22display_name%22,%22con%22,%22done%22]]',
        ) > 0,
        false,
      );
      done();
    });

    element.htsIn([
      {
        href: '/mockdata/tasks/list.json',
        method: 'GET',
        rel: 'list',
        type: 'task.TaskCollection',
        service: 'TaskService',
      },
    ]);
    element.load();
  });

  it('should request ordering', done => {
    element.setAttribute('service', 'TaskService');
    element.setOrderBy('id,    -display_name');

    /**
     * Register hook on wire --triggerLoad to
     *
     */
    element._FBPAddWireHook('--triggerLoad', req => {
      assert.equal(req.url.indexOf('order_by=id,-display_name') > 0, true);
      done();
    });

    element.htsIn([
      {
        href: '/mockdata/tasks/list.json',
        method: 'GET',
        rel: 'list',
        type: 'task.TaskCollection',
        service: 'TaskService',
      },
    ]);
    element.load();
  });

  it('should request partial fields', done => {
    element.setAttribute('service', 'TaskService');
    element.setFields('display_name');

    /**
     * Register hook on wire --triggerLoad to
     *
     */
    element._FBPAddWireHook('--triggerLoad', req => {
      assert.equal(req.url.indexOf('fields=display_name') > 0, true);
      done();
    });

    element.htsIn([
      {
        href: '/mockdata/tasks/list.json',
        method: 'GET',
        rel: 'list',
        type: 'task.TaskCollection',
        service: 'TaskService',
      },
    ]);
    element.load();
  });

  it('should request page_size', done => {
    element.setAttribute('service', 'TaskService');
    element.setPageSize(15);

    /**
     * Register hook on wire --triggerLoad to
     *
     */
    element._FBPAddWireHook('--triggerLoad', req => {
      assert.equal(req.url.indexOf('page_size=15') > 0, true);
      done();
    });

    element.htsIn([
      {
        href: '/mockdata/tasks/list.json',
        method: 'GET',
        rel: 'list',
        type: 'task.TaskCollection',
        service: 'TaskService',
      },
    ]);
    element.load();
  });

  it('should clear page_size', done => {
    element.setAttribute('service', 'TaskService');
    element.setPageSize(15);
    element.setPageSize(0);

    /**
     * Register hook on wire --triggerLoad to
     *
     */
    element._FBPAddWireHook('--triggerLoad', req => {
      assert.equal(req.url.indexOf('page_size') === -1, true);
      done();
    });

    element.htsIn([
      {
        href: '/mockdata/tasks/list.json',
        method: 'GET',
        rel: 'list',
        type: 'task.TaskCollection',
        service: 'TaskService',
      },
    ]);
    element.load();
  });

  it('should do next if rel is set', done => {
    element.setAttribute('service', 'TaskService');
    element.addEventListener('next-success', () => {
      done();
    });
    element.htsIn([
      {
        href: '/mockdata/tasks/list.json',
        method: 'GET',
        rel: 'next',
        type: 'task.TaskCollection',
        service: 'TaskService',
      },
    ]);
    element.next();
  });

  it('should do first if rel is set', done => {
    element.setAttribute('service', 'TaskService');
    element.addEventListener('first-success', () => {
      done();
    });
    element.htsIn([
      {
        href: '/mockdata/tasks/list.json',
        method: 'GET',
        rel: 'first',
        type: 'task.TaskCollection',
        service: 'TaskService',
      },
    ]);
    element.first();
  });

  it('should do prev if rel is set', done => {
    element.setAttribute('service', 'TaskService');
    element.addEventListener('prev-success', () => {
      done();
    });
    element.htsIn([
      {
        href: '/mockdata/tasks/list.json',
        method: 'GET',
        rel: 'prev',
        type: 'task.TaskCollection',
        service: 'TaskService',
      },
    ]);
    element.prev();
  });

  it('should do last if rel is set', done => {
    element.setAttribute('service', 'TaskService');
    element.addEventListener('last-success', () => {
      done();
    });
    element.htsIn([
      {
        href: '/mockdata/tasks/list.json',
        method: 'GET',
        rel: 'last',
        type: 'task.TaskCollection',
        service: 'TaskService',
      },
    ]);
    element.last();
  });

  it('should do nothing on first if rel is not set', done => {
    element.setAttribute('service', 'TaskService');
    element.addEventListener('missing-hts-first', () => {
      done();
    });
    element.htsIn([
      {
        href: '/mockdata/tasks/list.json',
        method: 'GET',
        rel: 'list',
        type: 'task.TaskCollection',
        service: 'TaskService',
      },
    ]);
    element.first();
  });

  it('should do nothing on last if rel is not set', done => {
    element.setAttribute('service', 'TaskService');
    element.addEventListener('missing-hts-last', () => {
      done();
    });
    element.htsIn([
      {
        href: '/mockdata/tasks/list.json',
        method: 'GET',
        rel: 'list',
        type: 'task.TaskCollection',
        service: 'TaskService',
      },
    ]);
    element.last();
  });

  it('should do nothing on prev if rel is not set', done => {
    element.setAttribute('service', 'TaskService');
    element.addEventListener('missing-hts-prev', () => {
      done();
    });
    element.htsIn([
      {
        href: '/mockdata/tasks/list.json',
        method: 'GET',
        rel: 'list',
        type: 'task.TaskCollection',
        service: 'TaskService',
      },
    ]);
    element.prev();
  });

  it('should do nothing on next if rel is not set', done => {
    element.setAttribute('service', 'TaskService');
    element.addEventListener('missing-hts-next', () => {
      done();
    });
    element.htsIn([
      {
        href: '/mockdata/tasks/list.json',
        method: 'GET',
        rel: 'list',
        type: 'task.TaskCollection',
        service: 'TaskService',
      },
    ]);
    element.next();
  });

  it('should load a collection for the defined service when hts is set', done => {
    element.setAttribute('service', 'TaskService');
    element.addEventListener('list-success', () => {
      done();
    });
    element.htsIn([
      {
        href: '/mockdata/persons/unavailable.json',
        method: 'GET',
        rel: 'list',
        type: 'person.PersonCollection',
        service: 'PersonService',
      },
      {
        href: '/mockdata/tasks/list.json',
        method: 'GET',
        rel: 'list',
        type: 'task.TaskCollection',
        service: 'TaskService',
      },
    ]);
    element.list();
  });

  it('should do nothing if hts has wrong service', done => {
    element.setAttribute('service', 'TaskService');
    element.addEventListener('missing-hts-list', () => {
      done();
    });
    element.htsIn([
      {
        href: '/mockdata/persons/unavailable.json',
        method: 'GET',
        rel: 'list',
        type: 'person.PersonCollection',
        service: 'PersonService',
      },
      {
        href: '/mockdata/tasks/list.json',
        method: 'GET',
        rel: 'list',
        type: 'task.TaskCollection',
        service: 'XXXService',
      },
    ]);
    element.list();
  });

  it('should fire event if request failed', done => {
    element.setAttribute('service', 'TaskService');
    element.addEventListener('list-failed', () => {
      done();
    });
    element.htsIn([
      {
        href: '/mockdata/tasks/unavailable.json',
        method: 'GET',
        rel: 'list',
        type: 'task.TaskCollection',
        service: 'TaskService',
      },
    ]);
    element.list();
  });

  it('should cancel a pending request if a new request is started', done => {
    element.setAttribute('service', 'TaskService');
    element.addEventListener('response', e => {
      console.log(e);
      done();
    });
    element.htsIn([
      {
        href: '/mockdata/tasks/list.json',
        method: 'GET',
        rel: 'list',
        type: 'task.TaskCollection',
        service: 'TaskService',
      },
    ]);
    element.list();
    element.list();
    element.list();
  });

  it('should Immediately cancel a pending request', done => {
    element.setAttribute('service', 'TaskService');
    element.addEventListener('response', e => {
      // no response expected - request should be aborted
      assert.equal('requestNotAborted', true);
    });
    element.addEventListener('request-aborted', () => {
      done();
    });
    element.htsIn([
      {
        href: '/mockdata/tasks/list.json',
        method: 'GET',
        rel: 'list',
        type: 'task.TaskCollection',
        service: 'TaskService',
      },
    ]);
    element.list();
    element.abortPendingRequest();
  });

  it('Accept header should be set ', done => {
    element.setAttribute('service', 'TaskService');

    element.addEventListener('hts-updated', () => {
      const request = element._makeRequest({
        href: '/mockdata/tasks/list.json',
        method: 'GET',
        rel: 'list',
        type: 'task.TaskCollection',
        service: 'TaskService',
      });
      assert.equal(
        request.headers.get('Accept'),
        'application/task.TaskCollection+json, application/json;q=0.9',
      );
      done();
    });

    element.htsIn([
      {
        href: '/mockdata/tasks/list.json',
        method: 'GET',
        rel: 'list',
        type: 'task.TaskCollection',
        service: 'TaskService',
      },
    ]);
  });

  it('should rebuild request url with via updateQp setted qp and the previously existed qp together in url ', done => {
    element.setAttribute('service', 'TaskService');
    element.updateQp({ on: true });
    element.updateQp({ level: '5' });

    /**
     * Register hook on wire --triggerLoad to
     *
     */
    element._FBPAddWireHook('--triggerLoad', req => {
      assert.equal(req.url.indexOf('on=true') > 0, true);
      assert.equal(req.url.indexOf('level=5') > 0, true);
      assert.equal(req.url.indexOf('previousqp=xyz') > 0, true);
      done();
    });

    element.htsIn([
      {
        href: '/mockdata/tasks/list.json?previousqp=xyz',
        method: 'GET',
        rel: 'list',
        type: 'task.TaskCollection',
        service: 'TaskService',
      },
    ]);
    element.list();
  });
});
