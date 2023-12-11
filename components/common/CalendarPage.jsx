


    import Iframe from 'react-iframe';
    import Link from 'next/link';
    import { Button } from '@/components/ui/button';
    
    export default function CalendarPage() {
        return (<>
            <div className='flex flex-1 mx-2 justify-center items-center pb-2 '>
                <Iframe
                src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FChicago&showTabs=1&showPrint=0&showCalendars=0&showTz=1&title=JP%20Test%20Calendar&src=anBob25leWJhZGdlcjFAZ21haWwuY29t&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%230B8043" style="border:solid 1px #777" width="800" height="600" frameborder="0" scrolling="no"
                    className='border-2 rounded-md shadow-lg'></Iframe>
                    </div>
                    <div className='flex flex-1 justify-center items-center'>
                <Button className='mt-4 mb-6'>
                    <Link href='/contact'>Contact Us</Link>
                </Button>
            </div></>
        );
    }
    
