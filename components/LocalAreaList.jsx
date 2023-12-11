/** @format */

import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';

import {localAreaData} from './LocalAreaData'

const data = localAreaData

export default function LocalAreaList() {
    return (
      <div>
        {data.map((section, index) => (
          <div key={index}>
            <Popover>
              <PopoverTrigger className='hover:text-primary'>
                {section.title}
              </PopoverTrigger>
              <PopoverContent>
                <ul className='list-disc'>
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </PopoverContent>
            </Popover>
          </div>
        ))}
      </div>
    );
  }