function Image(props: any) {
    return (
        <img 
            className={`Image ${props.classes}`}
            src={props.src}
            alt={props.alt}
        />
    )
}

export default Image;