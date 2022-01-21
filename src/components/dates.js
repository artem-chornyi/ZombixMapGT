const error = 3000;
const timeToUpdate = 1800000;

const dates = [
    {
        id: 1,
        timeUpdate: timeToUpdate,
        error: error,
        timeAdd: 1642719134068,
        filterTime: 0,
    },
    {
        id: 2,
        timeUpdate: timeToUpdate,
        error: error,
        timeAdd: 1642718041853,
        filterTime: 0,
    },
    {
        id: 3,
        timeUpdate: timeToUpdate,
        error: error,
        timeAdd: 1642719144374,
        filterTime: 0,
    },
    {
        id: 4,
        timeUpdate: timeToUpdate,
        error: error,
        timeAdd: 1642719725489,
        filterTime: 0,
    },
    {
        id: 5,
        timeAdd: 1642687206726,
        timeUpdate: timeToUpdate,
        error: error,
        filterTime: 0,
    },
    {
        id: 6,
        timeUpdate: timeToUpdate,
        error: error,
        timeAdd: 1642719154617,
        filterTime: 0,
    },
    {
        id: 7,
        timeUpdate: timeToUpdate,
        error: error,
        timeAdd: 1642719174487,
        filterTime: 0,
    },
    {
        id: 8,
        timeUpdate: timeToUpdate,
        error: error,
        timeAdd: 1642719164583,
        filterTime: 0,
    },
    {
        id: 9,
        timeUpdate: timeToUpdate,
        error: error,
        timeAdd: 1642719174354,
        filterTime: 0,
    },
    {
        id: 10,
        timeUpdate: timeToUpdate,
        error: error,
        timeAdd: 0,
    },
    {
        id: 11,
        timeUpdate: timeToUpdate,
        error: error,
        timeAdd: 0,
        filterTime: 0,
    },
    {
        id: 12,
        timeUpdate: timeToUpdate,
        error: error,
        timeAdd: 0,
        filterTime: 0,
    },
    {
        id: 13,
        timeUpdate: timeToUpdate,
        error: error,
        timeAdd: 1642718883263,
        filterTime: 0,
    },
    {
        id: 14,
        timeUpdate: timeToUpdate,
        error: error,
        timeAdd: 1642719204420,
        filterTime: 0,
    },
    {
        id: 15,
        timeUpdate: timeToUpdate,
        error: error,
        timeAdd: 1642719204482,
        filterTime: 0,
    },
    {
        id: 16,
        timeUpdate: timeToUpdate,
        error: error,
        timeAdd: 0,
        filterTime: 0,
    },
    {
        id: 17,
        timeUpdate: timeToUpdate,
        error: error,
        timeAdd: 1642719214594,
        filterTime: 0,
    },
    {
        id: 18,
        timeUpdate: timeToUpdate,
        error: error,
        timeAdd: 0,
        filterTime: 0,
    },
    {
        id: 19,
        timeUpdate: timeToUpdate,
        error: error,
        timeAdd: 0,
        filterTime: 0,
    },
    {
        id: 20,
        timeUpdate: timeToUpdate,
        error: error,
        timeAdd: 0,
        filterTime: 0,
    },
    {
        id: 21,
        timeUpdate: timeToUpdate,
        error: error,
        timeAdd: 0,
        filterTime: 0,
    },
    {
        id: 22,
        timeUpdate: timeToUpdate,
        error: error,
        timeAdd: 0,
        filterTime: 0,
    },
    {
        id: 23,
        timeUpdate: timeToUpdate,
        error: error,
        timeAdd: 0,
        filterTime: 0,
    },
    {
        id: 24,
        timeUpdate: timeToUpdate,
        error: error,
        timeAdd: 0,
        filterTime: 0,
    },
    {
        id: 25,
        timeUpdate: timeToUpdate,
        error: error,
        timeAdd: 0,
        filterTime: 0,
    },
    {
        id: 26,
        timeUpdate: timeToUpdate,
        error: error,
        timeAdd: 0,
        filterTime: 0,
    },
    {
        id: 27,
        timeUpdate: timeToUpdate,
        error: error,
        timeAdd: 0,
        filterTime: 0,
    },
    {
        id: 28,
        timeUpdate: timeToUpdate,
        error: error,
        timeAdd: 0,
        filterTime: 0,
    },
    {
        id: 29,
        timeUpdate: timeToUpdate,
        error: error,
        timeAdd: 0,
        filterTime: 0,
    },
    {
        id: 30,
        timeUpdate: timeToUpdate,
        error: error,
        timeAdd: 0,
        filterTime: 0,
    },
    {
        id: 31,
        timeUpdate: timeToUpdate,
        error: error,
        timeAdd: 0,
        filterTime: 0,
    },
    {
        id: 32,
        timeUpdate: timeToUpdate,
        error: error,
        timeAdd: 0,
        filterTime: 0,
    },
    {
        id: 33,
        timeUpdate: timeToUpdate,
        error: error,
        timeAdd: 0,
        filterTime: 0,
    },
    {
        id: 34,
        timeUpdate: timeToUpdate,
        error: error,
        timeAdd: 0,
        filterTime: 0,
    },
    {
        id: 35,
        timeUpdate: timeToUpdate,
        error: error,
        timeAdd: 0,
        filterTime: 0,
    },
    {
        id: 36,
        timeUpdate: timeToUpdate,
        error: error,
        timeAdd: 1642719394243,
        filterTime: 0,
    },
    {
        id: 37,
        timeUpdate: timeToUpdate,
        error: error,
        timeAdd: 0,
        filterTime: 0,
    },
    {
        id: 38,
        timeUpdate: timeToUpdate,
        error: error,
        timeAdd: 0,
        filterTime: 0,
    },
    {
        id: 39,
        timeUpdate: timeToUpdate,
        error: error,
        timeAdd: 0,
        filterTime: 0,
    },
    {
        id: 40,
        timeUpdate: timeToUpdate,
        error: error,
        timeAdd: 0,
        filterTime: 0,
    },
    {
        id: 41,
        timeUpdate: timeToUpdate,
        error: error,
        timeAdd: 0,
        filterTime: 0,
    },
    {
        id: 42,
        timeUpdate: timeToUpdate,
        error: error,
        timeAdd: 0,
        filterTime: 0,
    },
    {
        id: 43,
        timeUpdate: timeToUpdate,
        error: error,
        timeAdd: 0,
        filterTime: 0,
    },
    {
        id: 44,
        timeUpdate: timeToUpdate,
        error: error,
        timeAdd: 0,
        filterTime: 0,
    },
    {
        id: 45,
        timeUpdate: timeToUpdate,
        error: error,
        timeAdd: 0,
        filterTime: 0,
    },
    {
        id: 46,
        timeUpdate: timeToUpdate,
        error: error,
        timeAdd: 0,
        filterTime: 0,
    },
    {
        id: 47,
        timeUpdate: timeToUpdate,
        error: error,
        timeAdd: 0,
        filterTime: 0,
    },
    {
        id: 48,
        timeUpdate: timeToUpdate,
        error: error,
        timeAdd: 0,
        filterTime: 0,
    },
    {
        id: 49,
        timeUpdate: timeToUpdate,
        error: error,
        timeAdd: 0,
        filterTime: 0,
    },
    {
        id: 50,
        timeUpdate: timeToUpdate,
        error: error,
        timeAdd: 0,
        filterTime: 0,
    },
    {
        id: 51,
        timeUpdate: timeToUpdate,
        error: error,
        timeAdd: 0,
        filterTime: 0,
    },
    {
        id: 52,
        timeUpdate: timeToUpdate,
        error: error,
        timeAdd: 0,
        filterTime: 0,
    },
    {
        id: 53,
        timeUpdate: timeToUpdate,
        error: error,
        timeAdd: 0,
    },
    {
        id: 54,
        timeUpdate: timeToUpdate,
        error: error,
        timeAdd: 0,
        filterTime: 0,
    },
    {
        id: 55,
        timeUpdate: timeToUpdate,
        error: error,
        timeAdd: 0,
        filterTime: 0,
    },
    {
        id: 56,
        timeUpdate: timeToUpdate,
        error: error,
        timeAdd: 0,
        filterTime: 0,
    },
    {
        id: 57,
        timeUpdate: timeToUpdate,
        error: error,
        timeAdd: 0,
        filterTime: 0,
    },
    {
        id: 58,
        timeUpdate: timeToUpdate,
        error: error,
        timeAdd: 0,
        filterTime: 0,
    },
    {
        id: 59,
        timeUpdate: timeToUpdate,
        error: error,
        timeAdd: 0,
        filterTime: 0,
    },
    {
        id: 60,
        timeUpdate: timeToUpdate,
        error: error,
        timeAdd: 0,
        filterTime: 0,
    },
    {
        id: 61,
        timeUpdate: timeToUpdate,
        error: error,
        timeAdd: 0,
        filterTime: 0,
    },
    {
        id: 62,
        timeUpdate: timeToUpdate,
        error: error,
        timeAdd: 0,
        filterTime: 0,
    },
    {
        id: 63,
        timeUpdate: timeToUpdate,
        error: error,
        timeAdd: 0,
        filterTime: 0,
    },
    {
        id: 64,
        timeUpdate: timeToUpdate,
        error: error,
        timeAdd: 0,
    },
    {
        id: 65,
        timeUpdate: timeToUpdate,
        error: error,
        timeAdd: 0,
        filterTime: 0,
    },
    {
        id: 66,
        timeUpdate: timeToUpdate,
        error: error,
        timeAdd: 0,
    },
    {
        id: 67,
        timeUpdate: timeToUpdate,
        error: error,
        timeAdd: 0,
        filterTime: 0,
    },
    {
        id: 68,
        timeUpdate: timeToUpdate,
        error: error,
        timeAdd: 0,
        filterTime: 0,
    },
    {
        id: 69,
        timeUpdate: timeToUpdate,
        error: error,
        timeAdd: 0,
        filterTime: 0,
    },
];

export default dates;