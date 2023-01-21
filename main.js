
const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();



ASSETS.forEach( e => {
	ASSET_MANAGER.queueDownload(e)
})


ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	gameEngine.init(ctx, ASSET_MANAGER.cache);
	gameEngine.start();
});
