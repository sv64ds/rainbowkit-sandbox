import {ConnectButton} from '@rainbow-me/rainbowkit';
import type {NextPage} from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import {useState} from "react";

const Home: NextPage<{setModalSize: (size: 'compact' | 'wide') => void}> = ({setModalSize}) => {
    type AccountStatus = 'avatar' | 'full';
    type ChainStatus = 'icon' | 'full';
    const [accountStatus, setAccountStatus] = useState<AccountStatus>('avatar');
    const [chainStatus, setChainStatus] = useState<ChainStatus>('icon');
    const [showBalance, setShowBalance] = useState<boolean>(true);

    return (
        <div className={styles.container}>
            <Head>
                <title>Demo for rainbowkit wallet</title>
                <meta
                    content="this is demo project for rainbowkit wallet"
                    name="description"
                />
                <link href="/favicon.ico" rel="icon"/>
            </Head>

            <main className={styles.main}>
                <div>
                    <ConnectButton accountStatus={accountStatus}
                                   chainStatus={chainStatus}
                                   showBalance={showBalance}/>
                </div>

                <hr/>
                <h1>Props</h1>
                <hr/>

                <div style={{width: "100%", display: 'flex', justifyContent: 'space-between'}}>
                    <div>
                        <h2>Account status
                            <br/>
                            <small style={{fontSize: 10}}>(when connected)</small>
                        </h2>
                        <div>
                            <label>
                                <input  onChange={() => setAccountStatus('avatar')} defaultChecked name='status' type="radio"/>
                                avatar
                            </label>
                        </div>
                        <div>
                            <label>
                                <input onChange={() => setAccountStatus('full')} name='status' type="radio"/>
                                full
                            </label>
                        </div>
                    </div>
                    <div>
                        <h2>Chain status
                            <br/>
                            <small style={{fontSize: 10}}>(when connected)</small>
                        </h2>
                        <div>
                            <label>
                                <input  onChange={() => setChainStatus('icon')} defaultChecked name='Cstatus' type="radio"/>
                                icon
                            </label>
                        </div>
                        <div>
                            <label>
                                <input onChange={() => setChainStatus('full')} name='Cstatus' type="radio"/>
                                full
                            </label>
                        </div>
                    </div>
                    <div>
                        <h2>Show balance
                            <br/>
                            <small style={{fontSize: 10}}>(when connected)</small>
                        </h2>
                        <div>
                            <label>
                                <input  onChange={() => setShowBalance(true)} defaultChecked name='showBalance' type="radio"/>
                                true
                            </label>
                        </div>
                        <div>
                            <label>
                                <input onChange={() => setShowBalance(false)} name='showBalance' type="radio"/>
                                false
                            </label>
                        </div>
                    </div>
                    <div>
                        <h2>Modal size
                            <br/>
                            <small style={{fontSize: 10}}>(when <b>not</b> connected)</small></h2>
                        <div>
                            <label>
                                <input  onChange={() => setModalSize('wide')} defaultChecked name='modalSize' type="radio"/>
                                wide
                            </label>
                        </div>
                        <div>
                            <label>
                                <input onChange={() => setModalSize('compact')} name='modalSize' type="radio"/>
                                compact
                            </label>
                        </div>

                    </div>


                </div>


            </main>

            <footer className={styles.footer}>
            </footer>
        </div>
    );
};

export default Home;
