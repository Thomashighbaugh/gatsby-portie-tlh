interface XStreamableProps {
	id: string;
	loop?: boolean;
	title: string;
}

export function XStreamable({ id, loop = false, title }: XStreamableProps): JSX.Element {
	return (
		<div className="relative w-full h-0 my-2 pb-[56.250%]">
			<iframe
				allowFullScreen
				className="overflow-hidden absolute top-0 left-0 w-full h-full rounded-lg border-none"
				frameBorder={0}
				height="100%"
				loading="lazy"
				src={`https://streamable.com/e/${id}?loop=${Number(loop)}`}
				title={title}
				width="100%"
			/>
		</div>
	);
}
