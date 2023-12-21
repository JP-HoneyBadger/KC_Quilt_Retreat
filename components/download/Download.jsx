/** @format */

import useDownloader from 'react-use-downloader';
import { Button } from '../ui/button';
import { Label } from '@/components/ui/label';

export default function Download() {
	const { size, elapsed, percentage, download, cancel, error, isInProgress } =
		useDownloader();
	const fileUrl = '/pdf/Test_Doc.pdf';
	const filename = 'Test_Doc.pdf';
	return (
		<div className='flex flex-col md:flex-row justify-between items-center'>
			<div className='flex flex-col gap-y-4 justify-center items-center'>
				{/* <p>Download is {isInProgress ? 'in progress' : 'stopped'}</p> */}
				<Button onClick={() => download(fileUrl, filename)}>
					Download Policy
				</Button>
				<Button onClick={() => cancel()}>Cancel Download</Button>
				<p>Download size in bytes {size}</p>
				<Label htmlFor='file'>Downloading progress:</Label>
				<progress id='file' value={percentage} max='100' />
				<p>Elapsed time in seconds {elapsed}</p>
				{error && <p>possible error {JSON.stringify(error)}</p>}
			</div>
      <div>

      </div>
		</div>
	);
}
