import { nanoid } from 'nanoid';
import { getLSItem, setLSItem } from './localStorage';
import { LS_KEYS } from '../constants';

export const getTopics = () => {
  return getLSItem(LS_KEYS.TOPICS);
};

export const addTopic = (topic) => {
  let prevTopics = getLSItem(LS_KEYS.TOPICS);

  const saveTopic = {
    ...topic,
    id: nanoid(),
    sortOrder: new Date().getTime(),
    created: new Date().getTime(),
  };

  const newTopics = [...prevTopics, saveTopic];
  setLSItem(LS_KEYS.TOPICS, newTopics);
};

export const deleteTopic = (topicId) => {
  let prevTopics = getLSItem(LS_KEYS.TOPICS);

  const newTopics = prevTopics.filter((topic) => topic.id !== topicId);
  setLSItem(LS_KEYS.TOPICS, newTopics);
};
