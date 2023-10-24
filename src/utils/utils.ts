import dayjs from 'dayjs';
import { ReviewType } from '../types/types';
import { Action } from '@reduxjs/toolkit';

export default function getSortedReviewsByDate(allReviews: ReviewType[]): ReviewType[] {

  const res = allReviews.slice(0, allReviews.length);
  res.sort((a, b) => dayjs(b.createAt).valueOf() - dayjs(a.createAt).valueOf());
  return res;
}

export const extractActionsTypes = (actions: Action<string>[]) => actions.map(({ type }) => type);


