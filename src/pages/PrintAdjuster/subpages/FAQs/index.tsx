import { makeStyles } from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CircularProgress from '@material-ui/core/CircularProgress';
import Alert from '@material-ui/lab/Alert';
import React, {useState, useEffect, useCallback} from 'react';
import { LoadState } from '../../../../util/types';
import { FAQ, FAQDocument } from './types';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Linkify from 'react-linkify';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    loadingRoot: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    details: {
        flexDirection: 'column',
    },
    pageTitle: {
        marginBottom: theme.spacing(1),
    },
    inlineLink: {
        display: 'inline-block',
    }
}));

interface FAQCardProps {
    faq: FAQ;
    defaultLang: string;
    linkMapper(href: string, text: string): React.ReactNode;
    styles: ReturnType<typeof useStyles>;
}

function FAQCard({ faq, defaultLang, linkMapper, styles }: FAQCardProps) {
    return (
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>{faq.question[defaultLang]}</Typography>
            </AccordionSummary>
            <AccordionDetails className={styles.details}>
                <Typography>
                    {faq.answer[defaultLang]?.map(line => (
                        <p>
                            <Linkify componentDecorator={linkMapper}>
                                {line}
                            </Linkify>
                        </p>
                    ))}
                </Typography>
            </AccordionDetails>
        </Accordion>
    );
}

export default function FAQPage() {
    const styles = useStyles();
    const [faqState, setFAQState] = useState(LoadState.LOADING);
    const [faqs, setFAQs] = useState<FAQDocument>({
        defaultLang: 'en',
        faqs: [],
    });

    const linkifyLinkMapper = useCallback((href: string, text: string) => (
        <Link
            display="block"
            variant="body1"
            href={href}
            className={styles.inlineLink}
        >
            {text}
        </Link>
    ), [styles]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/kremi151/kremi151.github.io/master/faqs/printadjuster.json')
            .then(response => response.json())
            .then((response: FAQDocument) => {
                setFAQs(response);
                setFAQState(LoadState.LOADED);
            })
            .catch(error => {
                console.error('Could not load FAQs', error);
                setFAQState(LoadState.ERROR);
            });
    }, []);

    switch (faqState) {
        case LoadState.LOADING:
            return (
                <div className={styles.loadingRoot}>
                    <CircularProgress />
                </div>
            );
        case LoadState.ERROR:
            return (
                <div className={styles.loadingRoot}>
                    <Alert severity="error">
                        The changelog could not be loaded
                    </Alert>
                </div>
            );
        case LoadState.LOADED:
            return (
                <div className={styles.root}>
                    <Typography variant="h4" className={styles.pageTitle}>Frequently asked questions</Typography>
                    {faqs.faqs.map((faq, index) => (
                        <FAQCard
                            key={`faq_${index}`}
                            faq={faq}
                            defaultLang={faqs.defaultLang}
                            linkMapper={linkifyLinkMapper}
                            styles={styles}
                        />
                    ))}
                </div>
            );
    }
}
