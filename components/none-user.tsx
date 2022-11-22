const NoneUser = () => {
  return (
		<div className="relative max-w-md mx-auto md:max-w-2xl min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-16">
			<div className="p-6">
				<div className="flex flex-wrap justify-center">
					<div className="w-full flex justify-center">
						<div className="text-center mt-2 py-8">
							<h3 className="text-2xl text-slate-700 font-bold leading-normal mb-1">
								No sé a seleccionado ningún usuario, seleccione uno de la lista de búsqueda.
							</h3>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default NoneUser;
