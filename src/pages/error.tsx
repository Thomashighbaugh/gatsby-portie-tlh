import { Icon } from '@iconify/react';
import { useRouter } from 'next/router';

import { Button } from '~/components';
import { Layout } from '~/layouts';
import { NavigationItemType } from '~/types';

export default function Error(): JSX.Element {
	const router = useRouter();
	const { status } = router.query;

	return (
		<Layout.Error>
			<div className="flex flex-grow min-h-full pt-16 pb-12">
				<div className="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex flex-shrink-0 justify-center">
						<Icon
							className="h-12 text-primary-500 w-auto"
							icon="feather:alert-triangle"
						/>
					</div>
					<div className="py-4 text-center">
						<h1 className="mt-2 text-4xl font-extrabold text-primary-ry-ry-500 dark:text-white tracking-tight sm:text-5xl">
							{status}
						</h1>
						<p className="mt-8 text-sm font-medium text-primary-ry-ry-300 dar-primary-imary-imary-400">
							Looks like something went wrong on our end.
							<br />
							Please send me an email describing what happened so I can prevent this
							from happening to anyone else!{' '}
							<a href="mailto:thighbaugh@zoho.com">thighbaugh@zoho.com</a>
						</p>
						<div className="mt-6 flex justify-center items-center space-x-4">
							<Button.Standard
								type={NavigationItemType.ACTION}
								onClick={(): void => history.go(-1)}
								icon="feather:arrow-left"
							>
								Back
							</Button.Standard>
							<Button.Standard
								type={NavigationItemType.LINK}
								href="/"
								icon="feather:home"
							>
								Home
							</Button.Standard>
						</div>
					</div>
				</div>
			</div>
		</Layout.Error>
	);
}