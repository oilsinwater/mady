import Head from "next/head";
import styles from "../styles/Home.module.css";
import { PostHeader} from '../components/PostHeader';
import { PostRow } from '../components/PostRow';

export default function Home() {
  return (
    <>
    <Head />
      <div className="wrapper">
      <PostHeader />
      <br/>
      <PostRow />
      <PostRow />
        <style jsx>
          {`
            .wrapper {
              padding: 24px 24px 0px;
            }
          `}
        </style>
      </div>
    </>
  );
}
