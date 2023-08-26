'use client';

import { useState } from 'react';
import { Input } from './Input';

export default function FormFilter() {
  return (
    <div className='bg-[#272b33] p-2 text-base '>
      <Input tagType='input'>
        <input type='text' />
      </Input>
    </div>
  );
}
