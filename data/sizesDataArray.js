import { manSizes } from './sizeTable'
import { womanSizes } from './sizeTable'

export const sizesDataArray = [
  {
    latin: '2XS',
    number: {
      woomans: 40,
    },
    top: false,
    woomans: womanSizes['2xs'],
  },
  {
    latin: 'XS',
    number: {
      mans: 44,
      woomans: 42,
    },
    top: false,
    mans: manSizes?.xs,
    woomans: womanSizes?.xs,
  },
  {
    latin: 'S',
    number: {
      mans: 46,
      woomans: 44,
    },
    top: false,
    mans: manSizes?.s,
    woomans: womanSizes?.s,
  },
  {
    latin: 'M',
    number: {
      mans: 48,
      woomans: 46,
    },
    top: false,
    mans: manSizes?.m,
    woomans: womanSizes?.m,
  },
  {
    latin: 'L',
    number: {
      mans: 50,
      woomans: 48,
    },
    top: false,
    mans: manSizes?.l,
    woomans: womanSizes?.l,
  },
  {
    latin: 'XL',
    number: {
      mans: 52,
      woomans: 50,
    },
    top: false,
    mans: manSizes?.xl,
    woomans: womanSizes?.xl,
  },
  {
    latin: '2Xl',
    number: {
      mans: 54,
      woomans: 52,
    },
    top: true,
    mans: manSizes['2xl'],
    woomans: womanSizes['2xl'],
  },
  {
    latin: '3XL',
    number: {
      mans: 56,
      woomans: 54,
    },
    top: false,
    mans: manSizes['3xl'],
    woomans: womanSizes['3xl'],
  },
  {
    latin: '4XL',
    number: {
      mans: 58,
      woomans: 56,
    },
    top: false,
    mans: manSizes['4xl'],
    woomans: womanSizes['4xl'],
  },
  {
    latin: '5XL',
    number: {
      mans: 60,
      woomans: '58-60',
    },
    top: false,
    mans: manSizes['5xl'],
    woomans: womanSizes['5xl'],
  },
];
