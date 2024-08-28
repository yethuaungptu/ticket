import app from '../../app';
import request from 'supertest';
import cookie from 'cookie';

let accessToken: any;
let eventId: string;
let purchaseId: string;

function makeName(length: number) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}
const user = makeName(7);
const email = user + '@gmail.com';
const registerUser = {
    name: user,
    email: email,
    password: 'test123'
};

const registeredUser = {
    name: 'Test User 1',
    email: 'testuser1@gmail.com',
    password: 'test123'
};

const nonRegisterUser = {
    email: 'non@gmail.com',
    password: 'non123'
};

const purchaseItem = {
    eventId: '66ce89710409cc7b54a8e8ac',
    tickets: [
        { code: 'VVIP', count: 1 },
        { code: 'GA', count: 1 }
    ]
};

const eventCreate = {
    name: 'DJ One Sky',
    date: '12/14/2024',
    time: '9:00 PM -Local Time',
    venue: 'MDY Hall, Mandalay',
    description: 'Dj Spider Show',
    tickets: [
        { category: 'VVIP', price: 200000, code: 'VVIP', totalSeat: 100, avaliableSeat: 100 },
        { category: 'VIP', price: 150000, code: 'VIP', totalSeat: 200, avaliableSeat: 200 },
        { category: 'GA', price: 10000, code: 'GA', totalSeat: 400, avaliableSeat: 400 }
    ]
};

const eventUpdate = {
    name: 'DJ One Sky Blue',
    date: '12/15/2024',
    time: '9:30 PM -Local Time',
    venue: 'TG Hall, Taunggyi',
    description: 'Dj Mokey Show',
    status: '1',
    tickets: [
        { category: 'VVIP', price: 210000, code: 'VVIP', totalSeat: 100, avaliableSeat: 100 },
        { category: 'VIP', price: 160000, code: 'VIP', totalSeat: 200, avaliableSeat: 200 },
        { category: 'GA', price: 17000, code: 'GA', totalSeat: 400, avaliableSeat: 400 }
    ]
};

describe('GET /api', () => {
    it('return welcome massage', async () => {
        const res = await request(app).get('/api');
        expect(res.statusCode).toEqual(200);
    });
});

describe('POST /api/register', () => {
    it('Account registration', async () => {
        const res = await request(app)
            .post('/api/register')
            .send(registerUser)
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json');
        expect(res.statusCode).toEqual(201);
    });
});

describe('POST /api/register', () => {
    it('Account registration duplicate check ', async () => {
        const res = await request(app)
            .post('/api/register')
            .send(registerUser)
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json');
        expect(res.statusCode).toEqual(409);
    });
});

describe('POST /api/login', () => {
    it('Account login correct information ', async () => {
        const res: any = await request(app)
            .post('/api/login')
            .send({ email: registeredUser.email, password: registeredUser.password })
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json');
        expect(res.statusCode).toEqual(200);
        accessToken = cookie.parse(res.header['set-cookie'][0]).JWT_COOKIE_USER;
    });
});

describe('POST /api/login', () => {
    it('Account login incorrect information ', async () => {
        const res = await request(app)
            .post('/api/login')
            .send(nonRegisterUser)
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json');
        expect(res.statusCode).toEqual(404);
    });
});

describe('GET /api/events', () => {
    it('return event list', async () => {
        const res = await request(app).get('/api/events');
        expect(res.statusCode).toEqual(200);
    });
});

describe('GET /api/events/:id', () => {
    it('check event detail with existing id', async () => {
        const res = await request(app).get('/api/events/66ce89710409cc7b54a8e8ac');
        expect(res.statusCode).toEqual(200);
    });
});

describe('GET /api/events/:id', () => {
    it('return event detail with non existing id', async () => {
        const res = await request(app).get('/api/events/66ce89710409cc7b54a8e7ac');
        expect(res.statusCode).toEqual(404);
    });
});

describe('POST /api/purchase', () => {
    it('Ticket purchase ', async () => {
        const res = await request(app)
            .post('/api/purchase')
            .set('Cookie', [cookie.serialize('JWT_COOKIE_USER', accessToken, { path: '/' })])
            .send(purchaseItem)
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json');
        expect(res.statusCode).toEqual(200);
    });
});

describe('GET /api/user', () => {
    it('User Index page ', async () => {
        const res = await request(app)
            .get('/api/user')
            .set('Cookie', [cookie.serialize('JWT_COOKIE_USER', accessToken, { path: '/' })])
            .send(purchaseItem)
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json');
        expect(res.statusCode).toEqual(200);
    });
});

describe('POST /api/user/event', () => {
    it('User event create ', async () => {
        const res: any = await request(app)
            .post('/api/user/event')
            .set('Cookie', [cookie.serialize('JWT_COOKIE_USER', accessToken, { path: '/' })])
            .send(eventCreate)
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json');
        expect(res.statusCode).toEqual(201);
        eventId = JSON.parse(res.text).data._id;
    });
});

describe('GET /api/user/event', () => {
    it('User event list ', async () => {
        const res = await request(app)
            .get('/api/user/event')
            .set('Cookie', [cookie.serialize('JWT_COOKIE_USER', accessToken, { path: '/' })])
            .send(eventCreate)
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json');
        expect(res.statusCode).toEqual(200);
    });
});

describe('GET /api/user/event', () => {
    it('User event detail ', async () => {
        const res = await request(app)
            .get(`/api/user/event/${eventId}`)
            .set('Cookie', [cookie.serialize('JWT_COOKIE_USER', accessToken, { path: '/' })])
            .send(eventCreate)
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json');
        expect(res.statusCode).toEqual(200);
    });
});

describe('PATCH /api/user/event', () => {
    it('User event update ', async () => {
        const res = await request(app)
            .patch(`/api/user/event/${eventId}`)
            .set('Cookie', [cookie.serialize('JWT_COOKIE_USER', accessToken, { path: '/' })])
            .send(eventUpdate)
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json');
        expect(res.statusCode).toEqual(200);
    });
});

describe('DELETE /api/user/event', () => {
    it('User event delete ', async () => {
        const res = await request(app)
            .delete(`/api/user/event/${eventId}`)
            .set('Cookie', [cookie.serialize('JWT_COOKIE_USER', accessToken, { path: '/' })])
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json');
        expect(res.statusCode).toEqual(200);
    });
});

describe('GET /api/user/purchase', () => {
    it('User purchase list ', async () => {
        const res = await request(app)
            .get(`/api/user/purchase/`)
            .set('Cookie', [cookie.serialize('JWT_COOKIE_USER', accessToken, { path: '/' })])
            .send(eventCreate)
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json');
        expect(res.statusCode).toEqual(200);
        purchaseId = JSON.parse(res.text).data[0]._id;
    });
});

describe('GET /api/user/purchase', () => {
    it('User purchase detail ', async () => {
        const res = await request(app)
            .get(`/api/user/purchase/${purchaseId}`)
            .set('Cookie', [cookie.serialize('JWT_COOKIE_USER', accessToken, { path: '/' })])
            .send(eventCreate)
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json');
        expect(res.statusCode).toEqual(200);
    });
});
