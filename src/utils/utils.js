export const THINGSPEAK = 'https://api.thingspeak.com/';

export const ThingSpeakWriteAPI = (field) => `update?api_key=FW8F6DEGWF2P9CEG&${field}`;

export const ThingSpeakReadAPI = (field_number) =>
  `channels/1336379/fields/${field_number}/last?api_key=RX065Q6TIP3VQZMK`;
