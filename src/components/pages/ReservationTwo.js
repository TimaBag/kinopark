import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const hallMapData = {
  "HallId": 89,
  "HallName": "Зал 5",
  "SeanceId": 480568,
  "SeanceName": "Альфа 2D\"БА\"",
  "Seats": [
    {
      "Id": 13166,
      "RowText": "12",
      "SeatText": "24",
      "GridX": 1,
      "GridY": 13,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13167,
      "RowText": "12",
      "SeatText": "23",
      "GridX": 2,
      "GridY": 13,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13168,
      "RowText": "12",
      "SeatText": "22",
      "GridX": 3,
      "GridY": 13,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13169,
      "RowText": "1",
      "SeatText": "20",
      "GridX": 5,
      "GridY": 1,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13170,
      "RowText": "2",
      "SeatText": "20",
      "GridX": 5,
      "GridY": 2,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13171,
      "RowText": "3",
      "SeatText": "22",
      "GridX": 5,
      "GridY": 3,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13172,
      "RowText": "14",
      "SeatText": "16",
      "GridX": 5,
      "GridY": 16,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13173,
      "RowText": "1",
      "SeatText": "19",
      "GridX": 6,
      "GridY": 1,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13174,
      "RowText": "2",
      "SeatText": "19",
      "GridX": 6,
      "GridY": 2,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13175,
      "RowText": "3",
      "SeatText": "21",
      "GridX": 6,
      "GridY": 3,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13176,
      "RowText": "4",
      "SeatText": "21",
      "GridX": 6,
      "GridY": 5,
      "HallId": 89,
      "IsFree": false,
      "status": 0
    },
    {
      "Id": 13177,
      "RowText": "5",
      "SeatText": "21",
      "GridX": 6,
      "GridY": 6,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13178,
      "RowText": "6",
      "SeatText": "21",
      "GridX": 6,
      "GridY": 7,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13179,
      "RowText": "7",
      "SeatText": "21",
      "GridX": 6,
      "GridY": 8,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13180,
      "RowText": "8",
      "SeatText": "21",
      "GridX": 6,
      "GridY": 9,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13181,
      "RowText": "9",
      "SeatText": "21",
      "GridX": 6,
      "GridY": 10,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13182,
      "RowText": "10",
      "SeatText": "21",
      "GridX": 6,
      "GridY": 11,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13183,
      "RowText": "11",
      "SeatText": "21",
      "GridX": 6,
      "GridY": 12,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13184,
      "RowText": "12",
      "SeatText": "21",
      "GridX": 6,
      "GridY": 13,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13185,
      "RowText": "13",
      "SeatText": "18",
      "GridX": 6,
      "GridY": 14,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13186,
      "RowText": "14",
      "SeatText": "15",
      "GridX": 6,
      "GridY": 16,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13187,
      "RowText": "1",
      "SeatText": "18",
      "GridX": 7,
      "GridY": 1,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13188,
      "RowText": "2",
      "SeatText": "18",
      "GridX": 7,
      "GridY": 2,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13189,
      "RowText": "3",
      "SeatText": "20",
      "GridX": 7,
      "GridY": 3,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13190,
      "RowText": "4",
      "SeatText": "20",
      "GridX": 7,
      "GridY": 5,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13191,
      "RowText": "5",
      "SeatText": "20",
      "GridX": 7,
      "GridY": 6,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13192,
      "RowText": "6",
      "SeatText": "20",
      "GridX": 7,
      "GridY": 7,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13193,
      "RowText": "7",
      "SeatText": "20",
      "GridX": 7,
      "GridY": 8,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13194,
      "RowText": "8",
      "SeatText": "20",
      "GridX": 7,
      "GridY": 9,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13195,
      "RowText": "9",
      "SeatText": "20",
      "GridX": 7,
      "GridY": 10,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13196,
      "RowText": "10",
      "SeatText": "20",
      "GridX": 7,
      "GridY": 11,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13197,
      "RowText": "11",
      "SeatText": "20",
      "GridX": 7,
      "GridY": 12,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13198,
      "RowText": "12",
      "SeatText": "20",
      "GridX": 7,
      "GridY": 13,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13199,
      "RowText": "13",
      "SeatText": "17",
      "GridX": 7,
      "GridY": 14,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13200,
      "RowText": "14",
      "SeatText": "14",
      "GridX": 7,
      "GridY": 16,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13201,
      "RowText": "1",
      "SeatText": "17",
      "GridX": 8,
      "GridY": 1,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13202,
      "RowText": "2",
      "SeatText": "17",
      "GridX": 8,
      "GridY": 2,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13203,
      "RowText": "3",
      "SeatText": "19",
      "GridX": 8,
      "GridY": 3,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13204,
      "RowText": "4",
      "SeatText": "19",
      "GridX": 8,
      "GridY": 5,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13205,
      "RowText": "5",
      "SeatText": "19",
      "GridX": 8,
      "GridY": 6,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13206,
      "RowText": "6",
      "SeatText": "19",
      "GridX": 8,
      "GridY": 7,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13207,
      "RowText": "7",
      "SeatText": "19",
      "GridX": 8,
      "GridY": 8,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13208,
      "RowText": "8",
      "SeatText": "19",
      "GridX": 8,
      "GridY": 9,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13209,
      "RowText": "9",
      "SeatText": "19",
      "GridX": 8,
      "GridY": 10,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13210,
      "RowText": "10",
      "SeatText": "19",
      "GridX": 8,
      "GridY": 11,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13211,
      "RowText": "11",
      "SeatText": "19",
      "GridX": 8,
      "GridY": 12,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13212,
      "RowText": "12",
      "SeatText": "19",
      "GridX": 8,
      "GridY": 13,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13213,
      "RowText": "13",
      "SeatText": "16",
      "GridX": 8,
      "GridY": 14,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13214,
      "RowText": "14",
      "SeatText": "13",
      "GridX": 8,
      "GridY": 16,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13215,
      "RowText": "1",
      "SeatText": "16",
      "GridX": 9,
      "GridY": 1,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13216,
      "RowText": "2",
      "SeatText": "16",
      "GridX": 9,
      "GridY": 2,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13217,
      "RowText": "3",
      "SeatText": "18",
      "GridX": 9,
      "GridY": 3,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13218,
      "RowText": "4",
      "SeatText": "18",
      "GridX": 9,
      "GridY": 5,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13219,
      "RowText": "5",
      "SeatText": "18",
      "GridX": 9,
      "GridY": 6,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13220,
      "RowText": "6",
      "SeatText": "18",
      "GridX": 9,
      "GridY": 7,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13221,
      "RowText": "7",
      "SeatText": "18",
      "GridX": 9,
      "GridY": 8,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13222,
      "RowText": "8",
      "SeatText": "18",
      "GridX": 9,
      "GridY": 9,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13223,
      "RowText": "9",
      "SeatText": "18",
      "GridX": 9,
      "GridY": 10,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13224,
      "RowText": "10",
      "SeatText": "18",
      "GridX": 9,
      "GridY": 11,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13225,
      "RowText": "11",
      "SeatText": "18",
      "GridX": 9,
      "GridY": 12,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13226,
      "RowText": "12",
      "SeatText": "18",
      "GridX": 9,
      "GridY": 13,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13227,
      "RowText": "13",
      "SeatText": "15",
      "GridX": 9,
      "GridY": 14,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13228,
      "RowText": "14",
      "SeatText": "12",
      "GridX": 9,
      "GridY": 16,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13229,
      "RowText": "1",
      "SeatText": "15",
      "GridX": 10,
      "GridY": 1,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13230,
      "RowText": "2",
      "SeatText": "15",
      "GridX": 10,
      "GridY": 2,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13231,
      "RowText": "3",
      "SeatText": "17",
      "GridX": 10,
      "GridY": 3,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13232,
      "RowText": "4",
      "SeatText": "17",
      "GridX": 10,
      "GridY": 5,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13233,
      "RowText": "5",
      "SeatText": "17",
      "GridX": 10,
      "GridY": 6,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13234,
      "RowText": "6",
      "SeatText": "17",
      "GridX": 10,
      "GridY": 7,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13235,
      "RowText": "7",
      "SeatText": "17",
      "GridX": 10,
      "GridY": 8,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13236,
      "RowText": "8",
      "SeatText": "17",
      "GridX": 10,
      "GridY": 9,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13237,
      "RowText": "9",
      "SeatText": "17",
      "GridX": 10,
      "GridY": 10,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13238,
      "RowText": "10",
      "SeatText": "17",
      "GridX": 10,
      "GridY": 11,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13239,
      "RowText": "11",
      "SeatText": "17",
      "GridX": 10,
      "GridY": 12,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13240,
      "RowText": "12",
      "SeatText": "17",
      "GridX": 10,
      "GridY": 13,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13241,
      "RowText": "13",
      "SeatText": "14",
      "GridX": 10,
      "GridY": 14,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13242,
      "RowText": "14",
      "SeatText": "11",
      "GridX": 10,
      "GridY": 16,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13243,
      "RowText": "1",
      "SeatText": "14",
      "GridX": 11,
      "GridY": 1,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13244,
      "RowText": "2",
      "SeatText": "14",
      "GridX": 11,
      "GridY": 2,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13245,
      "RowText": "3",
      "SeatText": "16",
      "GridX": 11,
      "GridY": 3,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13246,
      "RowText": "4",
      "SeatText": "16",
      "GridX": 11,
      "GridY": 5,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13247,
      "RowText": "5",
      "SeatText": "16",
      "GridX": 11,
      "GridY": 6,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13248,
      "RowText": "6",
      "SeatText": "16",
      "GridX": 11,
      "GridY": 7,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13249,
      "RowText": "7",
      "SeatText": "16",
      "GridX": 11,
      "GridY": 8,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13250,
      "RowText": "8",
      "SeatText": "16",
      "GridX": 11,
      "GridY": 9,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13251,
      "RowText": "9",
      "SeatText": "16",
      "GridX": 11,
      "GridY": 10,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13252,
      "RowText": "10",
      "SeatText": "16",
      "GridX": 11,
      "GridY": 11,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13253,
      "RowText": "11",
      "SeatText": "16",
      "GridX": 11,
      "GridY": 12,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13254,
      "RowText": "12",
      "SeatText": "16",
      "GridX": 11,
      "GridY": 13,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13255,
      "RowText": "13",
      "SeatText": "13",
      "GridX": 11,
      "GridY": 14,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13256,
      "RowText": "14",
      "SeatText": "10",
      "GridX": 11,
      "GridY": 16,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13257,
      "RowText": "1",
      "SeatText": "13",
      "GridX": 12,
      "GridY": 1,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13258,
      "RowText": "2",
      "SeatText": "13",
      "GridX": 12,
      "GridY": 2,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13259,
      "RowText": "3",
      "SeatText": "15",
      "GridX": 12,
      "GridY": 3,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13260,
      "RowText": "4",
      "SeatText": "15",
      "GridX": 12,
      "GridY": 5,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13261,
      "RowText": "5",
      "SeatText": "15",
      "GridX": 12,
      "GridY": 6,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13262,
      "RowText": "6",
      "SeatText": "15",
      "GridX": 12,
      "GridY": 7,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13263,
      "RowText": "7",
      "SeatText": "15",
      "GridX": 12,
      "GridY": 8,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13264,
      "RowText": "8",
      "SeatText": "15",
      "GridX": 12,
      "GridY": 9,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13265,
      "RowText": "9",
      "SeatText": "15",
      "GridX": 12,
      "GridY": 10,
      "HallId": 89,
      "IsFree": false,
      "status": 0
    },
    {
      "Id": 13266,
      "RowText": "10",
      "SeatText": "15",
      "GridX": 12,
      "GridY": 11,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13267,
      "RowText": "11",
      "SeatText": "15",
      "GridX": 12,
      "GridY": 12,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13268,
      "RowText": "12",
      "SeatText": "15",
      "GridX": 12,
      "GridY": 13,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13269,
      "RowText": "13",
      "SeatText": "12",
      "GridX": 12,
      "GridY": 14,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13270,
      "RowText": "14",
      "SeatText": "9",
      "GridX": 12,
      "GridY": 16,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13271,
      "RowText": "1",
      "SeatText": "12",
      "GridX": 13,
      "GridY": 1,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13272,
      "RowText": "2",
      "SeatText": "12",
      "GridX": 13,
      "GridY": 2,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13273,
      "RowText": "3",
      "SeatText": "14",
      "GridX": 13,
      "GridY": 3,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13274,
      "RowText": "4",
      "SeatText": "14",
      "GridX": 13,
      "GridY": 5,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13275,
      "RowText": "5",
      "SeatText": "14",
      "GridX": 13,
      "GridY": 6,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13276,
      "RowText": "6",
      "SeatText": "14",
      "GridX": 13,
      "GridY": 7,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13277,
      "RowText": "7",
      "SeatText": "14",
      "GridX": 13,
      "GridY": 8,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13278,
      "RowText": "8",
      "SeatText": "14",
      "GridX": 13,
      "GridY": 9,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13279,
      "RowText": "9",
      "SeatText": "14",
      "GridX": 13,
      "GridY": 10,
      "HallId": 89,
      "IsFree": false,
      "status": 0
    },
    {
      "Id": 13280,
      "RowText": "10",
      "SeatText": "14",
      "GridX": 13,
      "GridY": 11,
      "HallId": 89,
      "IsFree": false,
      "status": 0
    },
    {
      "Id": 13281,
      "RowText": "11",
      "SeatText": "14",
      "GridX": 13,
      "GridY": 12,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13282,
      "RowText": "12",
      "SeatText": "14",
      "GridX": 13,
      "GridY": 13,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13283,
      "RowText": "13",
      "SeatText": "11",
      "GridX": 13,
      "GridY": 14,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13284,
      "RowText": "1",
      "SeatText": "11",
      "GridX": 14,
      "GridY": 1,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13285,
      "RowText": "2",
      "SeatText": "11",
      "GridX": 14,
      "GridY": 2,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13286,
      "RowText": "3",
      "SeatText": "13",
      "GridX": 14,
      "GridY": 3,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13287,
      "RowText": "4",
      "SeatText": "13",
      "GridX": 14,
      "GridY": 5,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13288,
      "RowText": "5",
      "SeatText": "13",
      "GridX": 14,
      "GridY": 6,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13289,
      "RowText": "6",
      "SeatText": "13",
      "GridX": 14,
      "GridY": 7,
      "HallId": 89,
      "IsFree": false,
      "status": 0
    },
    {
      "Id": 13290,
      "RowText": "7",
      "SeatText": "13",
      "GridX": 14,
      "GridY": 8,
      "HallId": 89,
      "IsFree": false,
      "status": 0
    },
    {
      "Id": 13291,
      "RowText": "8",
      "SeatText": "13",
      "GridX": 14,
      "GridY": 9,
      "HallId": 89,
      "IsFree": false,
      "status": 0
    },
    {
      "Id": 13292,
      "RowText": "9",
      "SeatText": "13",
      "GridX": 14,
      "GridY": 10,
      "HallId": 89,
      "IsFree": false,
      "status": 0
    },
    {
      "Id": 13293,
      "RowText": "10",
      "SeatText": "13",
      "GridX": 14,
      "GridY": 11,
      "HallId": 89,
      "IsFree": false,
      "status": 0
    },
    {
      "Id": 13294,
      "RowText": "11",
      "SeatText": "13",
      "GridX": 14,
      "GridY": 12,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13295,
      "RowText": "12",
      "SeatText": "13",
      "GridX": 14,
      "GridY": 13,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13296,
      "RowText": "13",
      "SeatText": "10",
      "GridX": 14,
      "GridY": 14,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13297,
      "RowText": "1",
      "SeatText": "10",
      "GridX": 15,
      "GridY": 1,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13298,
      "RowText": "2",
      "SeatText": "10",
      "GridX": 15,
      "GridY": 2,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13299,
      "RowText": "3",
      "SeatText": "12",
      "GridX": 15,
      "GridY": 3,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13300,
      "RowText": "4",
      "SeatText": "12",
      "GridX": 15,
      "GridY": 5,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13301,
      "RowText": "5",
      "SeatText": "12",
      "GridX": 15,
      "GridY": 6,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13302,
      "RowText": "6",
      "SeatText": "12",
      "GridX": 15,
      "GridY": 7,
      "HallId": 89,
      "IsFree": false,
      "status": 0
    },
    {
      "Id": 13303,
      "RowText": "7",
      "SeatText": "12",
      "GridX": 15,
      "GridY": 8,
      "HallId": 89,
      "IsFree": false,
      "status": 0
    },
    {
      "Id": 13304,
      "RowText": "8",
      "SeatText": "12",
      "GridX": 15,
      "GridY": 9,
      "HallId": 89,
      "IsFree": false,
      "status": 0
    },
    {
      "Id": 13305,
      "RowText": "9",
      "SeatText": "12",
      "GridX": 15,
      "GridY": 10,
      "HallId": 89,
      "IsFree": false,
      "status": 0
    },
    {
      "Id": 13306,
      "RowText": "10",
      "SeatText": "12",
      "GridX": 15,
      "GridY": 11,
      "HallId": 89,
      "IsFree": false,
      "status": 0
    },
    {
      "Id": 13307,
      "RowText": "11",
      "SeatText": "12",
      "GridX": 15,
      "GridY": 12,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13308,
      "RowText": "12",
      "SeatText": "12",
      "GridX": 15,
      "GridY": 13,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13309,
      "RowText": "13",
      "SeatText": "9",
      "GridX": 15,
      "GridY": 14,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13310,
      "RowText": "1",
      "SeatText": "9",
      "GridX": 16,
      "GridY": 1,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13311,
      "RowText": "2",
      "SeatText": "9",
      "GridX": 16,
      "GridY": 2,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13312,
      "RowText": "3",
      "SeatText": "11",
      "GridX": 16,
      "GridY": 3,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13313,
      "RowText": "4",
      "SeatText": "11",
      "GridX": 16,
      "GridY": 5,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13314,
      "RowText": "5",
      "SeatText": "11",
      "GridX": 16,
      "GridY": 6,
      "HallId": 89,
      "IsFree": false,
      "status": 0
    },
    {
      "Id": 13315,
      "RowText": "6",
      "SeatText": "11",
      "GridX": 16,
      "GridY": 7,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13316,
      "RowText": "7",
      "SeatText": "11",
      "GridX": 16,
      "GridY": 8,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13317,
      "RowText": "8",
      "SeatText": "11",
      "GridX": 16,
      "GridY": 9,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13318,
      "RowText": "9",
      "SeatText": "11",
      "GridX": 16,
      "GridY": 10,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13319,
      "RowText": "10",
      "SeatText": "11",
      "GridX": 16,
      "GridY": 11,
      "HallId": 89,
      "IsFree": false,
      "status": 0
    },
    {
      "Id": 13320,
      "RowText": "11",
      "SeatText": "11",
      "GridX": 16,
      "GridY": 12,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13321,
      "RowText": "12",
      "SeatText": "11",
      "GridX": 16,
      "GridY": 13,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13322,
      "RowText": "13",
      "SeatText": "8",
      "GridX": 16,
      "GridY": 14,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13323,
      "RowText": "1",
      "SeatText": "8",
      "GridX": 17,
      "GridY": 1,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13324,
      "RowText": "2",
      "SeatText": "8",
      "GridX": 17,
      "GridY": 2,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13325,
      "RowText": "3",
      "SeatText": "10",
      "GridX": 17,
      "GridY": 3,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13326,
      "RowText": "4",
      "SeatText": "10",
      "GridX": 17,
      "GridY": 5,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13327,
      "RowText": "5",
      "SeatText": "10",
      "GridX": 17,
      "GridY": 6,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13328,
      "RowText": "6",
      "SeatText": "10",
      "GridX": 17,
      "GridY": 7,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13329,
      "RowText": "7",
      "SeatText": "10",
      "GridX": 17,
      "GridY": 8,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13330,
      "RowText": "8",
      "SeatText": "10",
      "GridX": 17,
      "GridY": 9,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13331,
      "RowText": "9",
      "SeatText": "10",
      "GridX": 17,
      "GridY": 10,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13332,
      "RowText": "10",
      "SeatText": "10",
      "GridX": 17,
      "GridY": 11,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13333,
      "RowText": "11",
      "SeatText": "10",
      "GridX": 17,
      "GridY": 12,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13334,
      "RowText": "12",
      "SeatText": "10",
      "GridX": 17,
      "GridY": 13,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13335,
      "RowText": "13",
      "SeatText": "7",
      "GridX": 17,
      "GridY": 14,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13336,
      "RowText": "1",
      "SeatText": "7",
      "GridX": 18,
      "GridY": 1,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13337,
      "RowText": "2",
      "SeatText": "7",
      "GridX": 18,
      "GridY": 2,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13338,
      "RowText": "3",
      "SeatText": "9",
      "GridX": 18,
      "GridY": 3,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13339,
      "RowText": "4",
      "SeatText": "9",
      "GridX": 18,
      "GridY": 5,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13340,
      "RowText": "5",
      "SeatText": "9",
      "GridX": 18,
      "GridY": 6,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13341,
      "RowText": "6",
      "SeatText": "9",
      "GridX": 18,
      "GridY": 7,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13342,
      "RowText": "7",
      "SeatText": "9",
      "GridX": 18,
      "GridY": 8,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13343,
      "RowText": "8",
      "SeatText": "9",
      "GridX": 18,
      "GridY": 9,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13344,
      "RowText": "9",
      "SeatText": "9",
      "GridX": 18,
      "GridY": 10,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13345,
      "RowText": "10",
      "SeatText": "9",
      "GridX": 18,
      "GridY": 11,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13346,
      "RowText": "11",
      "SeatText": "9",
      "GridX": 18,
      "GridY": 12,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13347,
      "RowText": "12",
      "SeatText": "9",
      "GridX": 18,
      "GridY": 13,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13348,
      "RowText": "13",
      "SeatText": "6",
      "GridX": 18,
      "GridY": 14,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13349,
      "RowText": "1",
      "SeatText": "6",
      "GridX": 19,
      "GridY": 1,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13350,
      "RowText": "2",
      "SeatText": "6",
      "GridX": 19,
      "GridY": 2,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13351,
      "RowText": "3",
      "SeatText": "8",
      "GridX": 19,
      "GridY": 3,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13352,
      "RowText": "4",
      "SeatText": "8",
      "GridX": 19,
      "GridY": 5,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13353,
      "RowText": "5",
      "SeatText": "8",
      "GridX": 19,
      "GridY": 6,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13354,
      "RowText": "6",
      "SeatText": "8",
      "GridX": 19,
      "GridY": 7,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13355,
      "RowText": "7",
      "SeatText": "8",
      "GridX": 19,
      "GridY": 8,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13356,
      "RowText": "8",
      "SeatText": "8",
      "GridX": 19,
      "GridY": 9,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13357,
      "RowText": "9",
      "SeatText": "8",
      "GridX": 19,
      "GridY": 10,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13358,
      "RowText": "10",
      "SeatText": "8",
      "GridX": 19,
      "GridY": 11,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13359,
      "RowText": "11",
      "SeatText": "8",
      "GridX": 19,
      "GridY": 12,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13360,
      "RowText": "12",
      "SeatText": "8",
      "GridX": 19,
      "GridY": 13,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13361,
      "RowText": "13",
      "SeatText": "5",
      "GridX": 19,
      "GridY": 14,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13362,
      "RowText": "14",
      "SeatText": "8",
      "GridX": 19,
      "GridY": 16,
      "HallId": 89,
      "IsFree": false,
      "status": 0
    },
    {
      "Id": 13363,
      "RowText": "1",
      "SeatText": "5",
      "GridX": 20,
      "GridY": 1,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13364,
      "RowText": "2",
      "SeatText": "5",
      "GridX": 20,
      "GridY": 2,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13365,
      "RowText": "3",
      "SeatText": "7",
      "GridX": 20,
      "GridY": 3,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13366,
      "RowText": "4",
      "SeatText": "7",
      "GridX": 20,
      "GridY": 5,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13367,
      "RowText": "5",
      "SeatText": "7",
      "GridX": 20,
      "GridY": 6,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13368,
      "RowText": "6",
      "SeatText": "7",
      "GridX": 20,
      "GridY": 7,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13369,
      "RowText": "7",
      "SeatText": "7",
      "GridX": 20,
      "GridY": 8,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13370,
      "RowText": "8",
      "SeatText": "7",
      "GridX": 20,
      "GridY": 9,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13371,
      "RowText": "9",
      "SeatText": "7",
      "GridX": 20,
      "GridY": 10,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13372,
      "RowText": "10",
      "SeatText": "7",
      "GridX": 20,
      "GridY": 11,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13373,
      "RowText": "11",
      "SeatText": "7",
      "GridX": 20,
      "GridY": 12,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13374,
      "RowText": "12",
      "SeatText": "7",
      "GridX": 20,
      "GridY": 13,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13375,
      "RowText": "13",
      "SeatText": "4",
      "GridX": 20,
      "GridY": 14,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13376,
      "RowText": "14",
      "SeatText": "7",
      "GridX": 20,
      "GridY": 16,
      "HallId": 89,
      "IsFree": false,
      "status": 0
    },
    {
      "Id": 13377,
      "RowText": "1",
      "SeatText": "4",
      "GridX": 21,
      "GridY": 1,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13378,
      "RowText": "2",
      "SeatText": "4",
      "GridX": 21,
      "GridY": 2,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13379,
      "RowText": "3",
      "SeatText": "6",
      "GridX": 21,
      "GridY": 3,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13380,
      "RowText": "4",
      "SeatText": "6",
      "GridX": 21,
      "GridY": 5,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13381,
      "RowText": "5",
      "SeatText": "6",
      "GridX": 21,
      "GridY": 6,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13382,
      "RowText": "6",
      "SeatText": "6",
      "GridX": 21,
      "GridY": 7,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13383,
      "RowText": "7",
      "SeatText": "6",
      "GridX": 21,
      "GridY": 8,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13384,
      "RowText": "8",
      "SeatText": "6",
      "GridX": 21,
      "GridY": 9,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13385,
      "RowText": "9",
      "SeatText": "6",
      "GridX": 21,
      "GridY": 10,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13386,
      "RowText": "10",
      "SeatText": "6",
      "GridX": 21,
      "GridY": 11,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13387,
      "RowText": "11",
      "SeatText": "6",
      "GridX": 21,
      "GridY": 12,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13388,
      "RowText": "12",
      "SeatText": "6",
      "GridX": 21,
      "GridY": 13,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13389,
      "RowText": "13",
      "SeatText": "3",
      "GridX": 21,
      "GridY": 14,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13390,
      "RowText": "14",
      "SeatText": "6",
      "GridX": 21,
      "GridY": 16,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13391,
      "RowText": "1",
      "SeatText": "3",
      "GridX": 22,
      "GridY": 1,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13392,
      "RowText": "2",
      "SeatText": "3",
      "GridX": 22,
      "GridY": 2,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13393,
      "RowText": "3",
      "SeatText": "5",
      "GridX": 22,
      "GridY": 3,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13394,
      "RowText": "4",
      "SeatText": "5",
      "GridX": 22,
      "GridY": 5,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13395,
      "RowText": "5",
      "SeatText": "5",
      "GridX": 22,
      "GridY": 6,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13396,
      "RowText": "6",
      "SeatText": "5",
      "GridX": 22,
      "GridY": 7,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13397,
      "RowText": "7",
      "SeatText": "5",
      "GridX": 22,
      "GridY": 8,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13398,
      "RowText": "8",
      "SeatText": "5",
      "GridX": 22,
      "GridY": 9,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13399,
      "RowText": "9",
      "SeatText": "5",
      "GridX": 22,
      "GridY": 10,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13400,
      "RowText": "10",
      "SeatText": "5",
      "GridX": 22,
      "GridY": 11,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13401,
      "RowText": "11",
      "SeatText": "5",
      "GridX": 22,
      "GridY": 12,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13402,
      "RowText": "12",
      "SeatText": "5",
      "GridX": 22,
      "GridY": 13,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13403,
      "RowText": "13",
      "SeatText": "2",
      "GridX": 22,
      "GridY": 14,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13404,
      "RowText": "14",
      "SeatText": "5",
      "GridX": 22,
      "GridY": 16,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13405,
      "RowText": "1",
      "SeatText": "2",
      "GridX": 23,
      "GridY": 1,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13406,
      "RowText": "2",
      "SeatText": "2",
      "GridX": 23,
      "GridY": 2,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13407,
      "RowText": "3",
      "SeatText": "4",
      "GridX": 23,
      "GridY": 3,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13408,
      "RowText": "4",
      "SeatText": "4",
      "GridX": 23,
      "GridY": 5,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13409,
      "RowText": "5",
      "SeatText": "4",
      "GridX": 23,
      "GridY": 6,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13410,
      "RowText": "6",
      "SeatText": "4",
      "GridX": 23,
      "GridY": 7,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13411,
      "RowText": "7",
      "SeatText": "4",
      "GridX": 23,
      "GridY": 8,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13412,
      "RowText": "8",
      "SeatText": "4",
      "GridX": 23,
      "GridY": 9,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13413,
      "RowText": "9",
      "SeatText": "4",
      "GridX": 23,
      "GridY": 10,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13414,
      "RowText": "10",
      "SeatText": "4",
      "GridX": 23,
      "GridY": 11,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13415,
      "RowText": "11",
      "SeatText": "4",
      "GridX": 23,
      "GridY": 12,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13416,
      "RowText": "12",
      "SeatText": "4",
      "GridX": 23,
      "GridY": 13,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13417,
      "RowText": "13",
      "SeatText": "1",
      "GridX": 23,
      "GridY": 14,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13418,
      "RowText": "14",
      "SeatText": "4",
      "GridX": 23,
      "GridY": 16,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13419,
      "RowText": "1",
      "SeatText": "1",
      "GridX": 24,
      "GridY": 1,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13420,
      "RowText": "2",
      "SeatText": "1",
      "GridX": 24,
      "GridY": 2,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13421,
      "RowText": "3",
      "SeatText": "3",
      "GridX": 24,
      "GridY": 3,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13422,
      "RowText": "4",
      "SeatText": "3",
      "GridX": 24,
      "GridY": 5,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13423,
      "RowText": "5",
      "SeatText": "3",
      "GridX": 24,
      "GridY": 6,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13424,
      "RowText": "6",
      "SeatText": "3",
      "GridX": 24,
      "GridY": 7,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13425,
      "RowText": "7",
      "SeatText": "3",
      "GridX": 24,
      "GridY": 8,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13426,
      "RowText": "8",
      "SeatText": "3",
      "GridX": 24,
      "GridY": 9,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13427,
      "RowText": "9",
      "SeatText": "3",
      "GridX": 24,
      "GridY": 10,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13428,
      "RowText": "10",
      "SeatText": "3",
      "GridX": 24,
      "GridY": 11,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13429,
      "RowText": "11",
      "SeatText": "3",
      "GridX": 24,
      "GridY": 12,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13430,
      "RowText": "12",
      "SeatText": "3",
      "GridX": 24,
      "GridY": 13,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13431,
      "RowText": "14",
      "SeatText": "3",
      "GridX": 24,
      "GridY": 16,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13432,
      "RowText": "3",
      "SeatText": "2",
      "GridX": 25,
      "GridY": 3,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13433,
      "RowText": "4",
      "SeatText": "2",
      "GridX": 25,
      "GridY": 5,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13434,
      "RowText": "5",
      "SeatText": "2",
      "GridX": 25,
      "GridY": 6,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13435,
      "RowText": "6",
      "SeatText": "2",
      "GridX": 25,
      "GridY": 7,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13436,
      "RowText": "7",
      "SeatText": "2",
      "GridX": 25,
      "GridY": 8,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13437,
      "RowText": "8",
      "SeatText": "2",
      "GridX": 25,
      "GridY": 9,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13438,
      "RowText": "9",
      "SeatText": "2",
      "GridX": 25,
      "GridY": 10,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13439,
      "RowText": "10",
      "SeatText": "2",
      "GridX": 25,
      "GridY": 11,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13440,
      "RowText": "11",
      "SeatText": "2",
      "GridX": 25,
      "GridY": 12,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13441,
      "RowText": "12",
      "SeatText": "2",
      "GridX": 25,
      "GridY": 13,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13442,
      "RowText": "14",
      "SeatText": "2",
      "GridX": 25,
      "GridY": 16,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13443,
      "RowText": "3",
      "SeatText": "1",
      "GridX": 26,
      "GridY": 3,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13444,
      "RowText": "4",
      "SeatText": "1",
      "GridX": 26,
      "GridY": 5,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13445,
      "RowText": "5",
      "SeatText": "1",
      "GridX": 26,
      "GridY": 6,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13446,
      "RowText": "6",
      "SeatText": "1",
      "GridX": 26,
      "GridY": 7,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13447,
      "RowText": "7",
      "SeatText": "1",
      "GridX": 26,
      "GridY": 8,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13448,
      "RowText": "8",
      "SeatText": "1",
      "Gr* Connection #0 to host 192.168.70.196 left intact\r\nidX": 26,
      "GridY": 9,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13449,
      "RowText": "9",
      "SeatText": "1",
      "GridX": 26,
      "GridY": 10,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13450,
      "RowText": "10",
      "SeatText": "1",
      "GridX": 26,
      "GridY": 11,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13451,
      "RowText": "11",
      "SeatText": "1",
      "GridX": 26,
      "GridY": 12,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13452,
      "RowText": "12",
      "SeatText": "1",
      "GridX": 26,
      "GridY": 13,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    },
    {
      "Id": 13453,
      "RowText": "14",
      "SeatText": "1",
      "": 26,
      "GridY": 16,
      "HallId": 89,
      "IsFree": true,
      "status": 1
    }
  ]
}

class ReservationTwo extends Component {

  ksort(obj){
    var keys = Object.keys(obj).sort()
      , sortedObj = {};

    for(var i in keys) {
      sortedObj[keys[i]] = obj[keys[i]];
    }

    return sortedObj;
  }


  render() {
    var x = 0;
    var y = 0;
    var newHallMap = new Array(25);
    for (var i = 0; i < newHallMap.length; i++) {
      newHallMap[i] = new Array(25);
    }
    hallMapData.Seats.map((seat) => 
      {

        if(seat.GridY > y) y = seat.GridY;
        if(seat.GridX > x) x = seat.GridX;
        newHallMap[seat.GridY][seat.GridX] = seat;
      }
    )
    
    {
      for(var i = 0; i < newHallMap.length;i++){
        for(var j = 0; j < newHallMap[i].length;j++){
          console.log(newHallMap[i][j]);
        }
      }
    }
    return (
      <div className="content">
        <div className="container">
          <h1>Бронирование</h1>
          <div class="reservation-content">
            <ul class="reservation-steps">
              <li><a href="" class="active">1 шаг</a></li>
              <li><a href="" class="active">2 шаг</a></li>
              <li><a href="">3 шаг</a></li>
            </ul>
            <div class="places-and-reset-button">
              <div class="selected-places">
                <strong>Выберите места на карте зала:</strong> Вы выбрали <span class="color">2</span> из <span class="color">3</span> мест
              </div>
              <div class="reset-places-btn">
                <i class="fa fa-close"></i>
                <a href="">Сбросить выбранные места</a>
              </div>
            </div>
            <div class="screen">экран</div>
            <form action="#" class="reservation-form">
              <div class="wrapper-choice-place-cinema">
                <table class="choice-place-cinema">
                  {
                    newHallMap.map((elem,index)=>
                    {
                      return(
                        <tr>
                        {
                          newHallMap[index].map((in_elem,index_b)=>{
                            return(
                              <td className={newHallMap[index][index_b] === undefined ? "column-hidden" : ""}/>
                            );
                          })
                        }
                        </tr>
                      )
                    })
                  }
                </table>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default ReservationTwo;