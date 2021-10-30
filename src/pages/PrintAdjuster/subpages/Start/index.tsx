import React, {useMemo} from 'react';
import {makeStyles, Typography} from "@material-ui/core";
import PlayStoreBadge from "../../../../components/PlayStoreBadge";
import Carousel from "react-material-ui-carousel";

const useStyles = makeStyles((theme) => ({
    carouselItemRoot: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    carouselCaption: {
        marginTop: 8,
    },
    carouselNavButton: {
        backgroundColor: `${theme.palette.secondary.main} !important`,
    },
    carouselActiveIndicator: {
        color: theme.palette.secondary.main,
    },
}));

interface ScreenshotProps {
    readonly src: string;
    readonly description: string;
}

const screenshots: ScreenshotProps[] = [
    {
        src: '/screenshots/print_adjuster/Screenshot_1617986827.png',
        description: 'Move and resize pictures on a page',
    },
    {
        src: '/screenshots/print_adjuster/Screenshot_1617984502.png',
        description: 'Multiple pictures are supported as well',
    },
    {
        src: '/screenshots/print_adjuster/Screenshot_1617984342.png',
        description: 'Chose from a variety of options',
    },
    {
        src: '/screenshots/print_adjuster/Screenshot_1617984353.png',
        description: 'Crop pictures from within the app',
    },
    {
        src: '/screenshots/print_adjuster/Screenshot_1617984377.png',
        description: 'Apply predefined filters to your pictures',
    },
    {
        src: '/screenshots/print_adjuster/Screenshot_1617986748.png',
        description: 'Add texts to your page',
    },
    {
        src: '/screenshots/print_adjuster/Screenshot_1617986979.png',
        description: 'Create multiple pages',
    },
    {
        src: '/screenshots/print_adjuster/Screenshot_1617987065.png',
        description: 'Print your work',
    },
];

function Screenshot(props: ScreenshotProps) {
    const styles = useStyles();
    const { src, description } = props;
    return (
        <div className={styles.carouselItemRoot}>
            <img src={src} height={500} width={250} alt={description}/>
            <Typography className={styles.carouselCaption}>
                {description}
            </Typography>
        </div>
    );
}

export default function StartPage() {
    const styles = useStyles();
    const navButtonProps = useMemo(() => ({ className: styles.carouselNavButton }), [styles]);
    const activeIndicatorIconButtonProps = useMemo(() => ({ className: styles.carouselActiveIndicator }), [styles]);
    return (
        <div>
            <Carousel navButtonsProps={navButtonProps} activeIndicatorIconButtonProps={activeIndicatorIconButtonProps}>
                {screenshots.map((p, index) => <Screenshot {...p} key={`scr_${index}`} />)}
            </Carousel>

            <Typography variant="h5">
                Get the app
            </Typography>
            <PlayStoreBadge appPackageName="lu.kremi151.printresizer" />
        </div>
    );
}
