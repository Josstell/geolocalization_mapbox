import React from "react"

const Loading = () => {
	return (
		<div className="w-screen h-screen bg-slate-800 flex justify-center items-center ">
			<div className="text-center text-slate-50">
				<h3>Espere por favor</h3>
				<span>Localizando...</span>
			</div>
		</div>
	)
}

export default Loading
