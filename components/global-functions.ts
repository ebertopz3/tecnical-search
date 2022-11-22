import { NextRouter } from 'next/router';
/**
 * @description retorna clases para Link activo
 */
export const activeClass = (path: string, router: NextRouter): string => {
	const base: string = 'font-bold  text-xl ml-4 p-2 rounded hover:bg-indigo-300'
	const style = router.asPath === path ? `${base} text-white bg-blue-700` : `${base} text-black bg-indigo-400`;
	return style
}
/**
 * @description asigna ruta
 */
export const goRouter = async (path: string, router: NextRouter): Promise<void> => {
  await router.push(path)
}
