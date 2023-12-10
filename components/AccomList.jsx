/** @format */

import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';

import {accomData} from './AccomData'

const data = accomData

export default function AccomList() {
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