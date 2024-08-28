# Ticket purchase system

User can create event and purchase tickets with category.

## Installation

Clone and install ticket-project with npm

```bash
  git clone https://github.com/yethuaungptu/ticket.git
  cd ticket
  npm install
```

## Running Tests

To run tests, run the following command

```bash
  npm run test
```

## API Reference

#### Get all events

```http
  GET /api/events
```

#### Get event

```http
  GET /api/events/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### Purchase tickets

```http
  POST /api/purchase
```

**Required**. Account need to login
| Parameter | Type | Description |
| :-------- | :------- | :-------------------------------- |
| `eventId` | `string`| **Required**. Event ID |
| `tickets` | `Array` | **Required**. tickets have two fields |
| `tickets.code`| `string` | **Required**. tickets code |
| `tickets.count`| `number` | **Required**. tickets count |

#### Register

```http
  POST /api/register
```

| Parameter  | Type     | Description                     |
| :--------- | :------- | :------------------------------ |
| `name`     | `string` | **Required**. name              |
| `email`    | `string` | **Required**. email must unique |
| `password` | `string` | **Required**. password          |

#### Login

```http
  POST /api/login
```

| Parameter  | Type     | Description                     |
| :--------- | :------- | :------------------------------ |
| `email`    | `string` | **Required**. email must unique |
| `password` | `string` | **Required**. password          |

#### Create Event(need auth)

```http
  POST /api/user/event
```

| Parameter               | Type     | Description                         |
| :---------------------- | :------- | :---------------------------------- |
| `name`                  | `string` | **Required**. name                  |
| `date`                  | `string` | **Required**. date                  |
| `time`                  | `string` | **Required**. time                  |
| `venue`                 | `string` | **Required**. venue                 |
| `description`           | `string` | **Required**. description           |
| `tickets`               | `Array`  | **Required**. tickets have 5 fields |
| `tickets.category`      | `string` | **Required**. ticket category       |
| `tickets.price`         | `number` | **Required**. ticket price          |
| `tickets.code`          | `string` | **Required**. ticket code           |
| `tickets.totalSeat`     | `number` | **Required**. ticket totalSeat      |
| `tickets.avaliableSeat` | `number` | **Required**. ticket avaliableSeat  |

#### Event List (need auth)

```http
  GET /api/user/event
```

#### Event Detail (need auth)

```http
  GET /api/user/event/{$id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### Event Update (need auth)

```http
  PATCH /api/user/event/{$id}
```

| Parameter               | Type     | Description                            |
| :---------------------- | :------- | :------------------------------------- |
| `id`                    | `string` | **Required**. Id of item to fetch      |
| `name`                  | `string` | **Required**. name                     |
| `date`                  | `string` | **Required**. date                     |
| `time`                  | `string` | **Required**. time                     |
| `venue`                 | `string` | **Required**. venue                    |
| `status`                | `string` | **Required**. status for finish or not |
| `description`           | `string` | **Required**. description              |
| `tickets`               | `Array`  | **Required**. tickets have 5 fields    |
| `tickets.category`      | `string` | **Required**. ticket category          |
| `tickets.price`         | `number` | **Required**. ticket price             |
| `tickets.code`          | `string` | **Required**. ticket code              |
| `tickets.totalSeat`     | `number` | **Required**. ticket totalSeat         |
| `tickets.avaliableSeat` | `number` | **Required**. ticket avaliableSeat     |

#### Event Delete (need auth)

```http
  DELETE /api/user/event/{$id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### Purchase List (need auth)

```http
  GET /api/user/purchase
```

#### Purchase Detail (need auth)

```http
  GET /api/user/purchase/{$id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |
