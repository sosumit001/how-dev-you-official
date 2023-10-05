interface TImage {
	src:string,
	alt:string
}

const Image = ({src,alt}:TImage) => {
	return (
		<img width={'95%'}  src={ src } alt={alt} />
	)
}
export default Image