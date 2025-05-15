export default function useAsset(path) {
    if (path.startsWith("~/assets/")) {
        path = path.replace("~/assets/", "");
    } else {
        return path;
    }

    const glob = import.meta.glob(
        ["~/assets/**/*.png", "~/assets/**/*.svg", "~/assets/**/*.jpg"],
        {
            eager: true,
        }
    );
    const images = Object.fromEntries(
        Object.entries(glob).map(([key, value]) => [key, value.default])
    );
    return images[`/assets/${path}`];
}
