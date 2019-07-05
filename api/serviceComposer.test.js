const {stub, spy, assert} = require('sinon');
const fixture = require('./serviceComposer');

describe('Service Composer', () => {
    let service,
        req = {},
        res = {}, status, send, json,
        error = new Error({error: "blah blah error"});

    beforeEach(() => {
        service = stub();

        json = spy();
        send = spy();
        status = stub();

        res = {json, status, send};

        status.returns(res);
    });

    it('should call the service with the request and set it into the response json', async () => {
        const expectedResponse = {success: 'The call was successful'};
        service.returns(expectedResponse);

        await fixture.execute(service, req, res);

        assert.calledWith(service, req);
        assert.calledWith(json, expectedResponse);
    });

    it('should return error with 500 status if there is a error with error code not equal to ConditionalCheckFailedException', async () => {
        service.throws(error);
        error.code = 'InternalServerError';

        await fixture.execute(service, req, res);

        assert.calledWith(service, req);
        assert.calledWith(status, 500);
        assert.calledWith(send, error);
    });

    it('should return error with 409 status if there is a error with error code equal to ConditionalCheckFailedException', async () => {
        service.throws(error);
        error.code = 'ConditionalCheckFailedException';

        await fixture.execute(service, req, res);

        assert.calledWith(service, req);
        assert.calledWith(status, 409);
        assert.calledWith(send, error);
    });
});