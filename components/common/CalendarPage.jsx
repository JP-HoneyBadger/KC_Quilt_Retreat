


    import Iframe from 'react-iframe';
    import Link from 'next/link';
    import { Button } from '@/components/ui/button';
    
    export default function CalendarPage() {
        return (<>
            <div className='flex flex-1 mx-2 justify-center items-center pb-2 '>

            <Iframe src="https://calendar.google.com/calendar/embed?src=9f511c9a97543a96dbeb4ac671b95f894aa0d2bd722aec1dfd512b31120817a5%40group.calendar.google.com&ctz=America%2FChicago" style="border: 0" width="800" height="600" frameborder="0" scrolling="no" className='border-2 rounded-md shadow-lg'></Iframe>

                    </div>
                    <div className='flex flex-1 justify-center items-center'>
                <Button className='mt-4 mb-6'>
                    <Link href='/contact'>Contact Us</Link>
                </Button>
            </div></>
        );
    }
    
