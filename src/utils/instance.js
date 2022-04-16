import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://opendata.resas-portal.go.jp',
  timeout: 1000,
  headers: {
    'X-API-KEY': 'bTZkeeUXm4LHtZOrbS3eB0DOd52zeUe8bgLdi4vz',
  },
});

export default instance;
