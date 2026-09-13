import type { ToolInfo } from '../types';

export const tools: ToolInfo[] = [
  {
    id: 'compressor',
    path: '/tools/compressor',
    iconKey: 'Archive',
    category: 'optimize',
  },
  {
    id: 'resizer',
    path: '/tools/resizer',
    iconKey: 'Maximize2',
    category: 'basic',
  },
  {
    id: 'converter',
    path: '/tools/converter',
    iconKey: 'Repeat',
    category: 'convert',
  },
  {
    id: 'cropper',
    path: '/tools/cropper',
    iconKey: 'Crop',
    category: 'basic',
  },
  {
    id: 'rotator',
    path: '/tools/rotator',
    iconKey: 'RotateCw',
    category: 'basic',
  },
  {
    id: 'flipper',
    path: '/tools/flipper',
    iconKey: 'FlipHorizontal',
    category: 'basic',
  },
];

export const getToolById = (id: string): ToolInfo | undefined => {
  return tools.find(t => t.id === id);
};
