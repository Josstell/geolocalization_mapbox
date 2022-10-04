import Image from "next/image"
import * as React from "react"

const LogoMariachon = () => {
	return (
		<div className="fixed right-10 bottom-5 z-50">
			<div className="relative w-32 h-32  ">
				<Image
					src={"/mariachonBlack.svg"}
					layout="fill"
					objectFit="cover"
					alt="Logo Mariachon"
				/>
			</div>
		</div>
	)
}

export default LogoMariachon
