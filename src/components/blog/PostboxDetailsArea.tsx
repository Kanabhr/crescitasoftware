import { RichText } from '@payloadcms/richtext-lexical/react'
import { getBlogPostById, getApprovedComments } from '@/lib/blog'
import { DribbleIconLarge, FacebookIconLarge, InstragramThreeIcon, TwittorIconLarge } from "@/svg/SocialIcons";
import PostboxDetailsAuthor from "./subComponents/PostboxDetailsAuthor";
import PostboxDetailsThumb from "./subComponents/PostboxDetailsThumb";
import BlogCommentForm from "../form/BlogCommentForm";
import BlogComments from "./BlogComments";
import QuoteIcon from "@/svg/QuoteIcon";
import BlogSidebar from "./BlogSidebar";
import Link from "next/link";

const socialLinks = [
    { id: "fb", icon: <FacebookIconLarge />, href: "#" },
    { id: "tw", icon: <TwittorIconLarge />, href: "#" },
    { id: "dr", icon: <DribbleIconLarge />, href: "#" },
    { id: "ig", icon: <InstragramThreeIcon />, href: "#" },
];

interface PostboxDetailsAreaProps {
    postId?: number;
}

const PostboxDetailsArea = async ({ postId }: PostboxDetailsAreaProps) => {
    const post = postId ? await getBlogPostById(postId) : null;
    const comments = postId ? await getApprovedComments(postId) : [];
    const commentCount =
        comments.length + comments.reduce((sum, c) => sum + (c.replies?.length ?? 0), 0);
    // postExistsInDb is true when we got back a post object (whether from DB or static fallback
    // for an unseeded DB). The key distinction is: if the DB has posts but THIS post wasn't
    // found, getBlogPostById returns null and we fall through to the template below.
    const postExistsInDb = post !== null;
    // Only show tags when the post actually has categories; never show hard-coded tags for a real
    // post with no categories (issue A3). For a completely absent post we use template tags.
    const tags = postExistsInDb
        ? (post.categoryNames?.length ? post.categoryNames : [])
        : ['Blog', 'Creative', 'Portfolio', 'Theme'];

    return (
        <div className="postbox-area tp-blog-details-ptb pt-110 pb-120">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8">
                        <div className="postbox-left-sidebar mb-40">
                            <div className="postbox-wrapper">
                                {/* ---- Article body ---- */}
                                {post?.body ? (
                                    <div className="postbox-details-text mb-45">
                                        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                                        <RichText data={post.body as any} />
                                    </div>
                                ) : !postExistsInDb ? (
                                    <>
                                        <div className="postbox-details-text mb-45">
                                            <h4 className="postbox-title tp-ff-sequel-bold-head fs-32 mb-15">Using a Query</h4>
                                            <p className="mb-20">
                                                We love to bring designs to life as a developer, and I aim to do this using whatever front end tools are necessary. My preferred tools
                                                are more modern javascript libraries like React.js but I like to use whatever is best for the websites needs. There are several reasons why
                                                a business would consider a rebrand and it doesn&apos;t necessarily mean the business has been unsuccessful. Alexandre began his artistic
                                                journey as a painter in Paris before refining his skills in Tokyo, Japan. Now working from New York,
                                            </p>
                                            <p>
                                                love to bring designs to life as a developer, and I aim to do this using whatever front end tools are necessary. My preferred tools
                                                are more modern javascript libraries like React.js but I like to use whatever is best for the websites needs. There are several reasons why
                                                a business would consider a rebrand and it doesn&apos;t necessarily.
                                            </p>
                                        </div>
                                        <div className="postbox-details-text mb-40">
                                            <h4 className="postbox-title tp-ff-sequel-bold-head fs-32 mb-15">The Spark of an Idea</h4>
                                            <p>
                                                We love to bring designs to life as a developer, and I aim to do this using whatever front end tools are necessary. My preferred tools
                                                are more modern javascript libraries like React.js but I like to use whatever is best for the websites needs. There are several reasons why
                                                a business would consider a rebrand and it doesn&apos;t necessarily mean the business has been unsuccessful. Alexandre began his artistic
                                                journey as a painter in Paris before refining his skills in Tokyo, Japan. Now working from New York,
                                            </p>
                                        </div>
                                        <PostboxDetailsThumb />
                                        <div className="postbox-details-text mb-45">
                                            <p>
                                                We love to bring designs to life as a developer, and I aim to do this using whatever front end tools are necessary. My preferred tools
                                                are more modern javascript libraries like React.js but I like to use whatever is best for the websites needs. There are several reasons why
                                                a business would consider a rebrand and it doesn&apos;t necessarily mean the business has been unsuccessful. Alexandre began his artistic
                                                journey as a painter in Paris before refining his skills in Tokyo, Japan. Now working from New York,
                                            </p>
                                        </div>
                                        <div className="postbox-details-quote-box mb-40">
                                            <blockquote>
                                                <div className="postbox-details-quote-box-inner d-flex align-items-start">
                                                    <i>
                                                        <QuoteIcon />
                                                    </i>
                                                    <div className="postbox-details-quote">
                                                        <p className="mb-10">&ldquo;Success is the result of perfection hard<br />
                                                            work learning from failure loyalty &amp; persistence&rdquo;
                                                        </p>
                                                        <span>Phil Martinez</span>
                                                    </div>
                                                </div>
                                            </blockquote>
                                        </div>
                                        <div className="postbox-details-text mb-35">
                                            <p>
                                                We love to bring designs to life as a developer, and I aim to do this using whatever front end tools are necessary. My preferred tools
                                                are more modern javascript libraries like React.js but I like to use whatever is best for the websites needs. There are several reasons why
                                                a business would consider a rebrand and it doesn&apos;t necessarily mean the business has been unsuccessful. Alexandre began his artistic
                                                journey as a painter in Paris before refining his skills in Tokyo, Japan. Now working from New York,
                                            </p>
                                        </div>
                                        <div className="postbox-details-text mb-25">
                                            <h4 className="postbox-title tp-ff-sequel-bold-head fs-32 mb-20">On the specificity of selectors</h4>
                                            <p>
                                                The specificity of the : <span>not()</span> pseudo-class is the specificity of its argument. The :not() pseudo-class does not add to the selector specificity, unlike other pseudo-classes.
                                            </p>
                                        </div>
                                        <div className="postbox-details-text mb-45">
                                            <p className="mb-20">
                                                The simple <span>selector that</span> : <span>not()</span> takes as an argument can be any of the following:
                                            </p>
                                            <div className="postbox-details-list">
                                                <ul>
                                                    <li>Type selector (e.g <span>p, span,</span> etc.)</li>
                                                    <li>Class selector (e.g <span>.element, .sidebar,</span> etc.)</li>
                                                    <li>ID selector (e. #header)</li>
                                                    <li>Pseudo-class selector (e.g <i>:first-child, :last-of-type</i>)</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="postbox-details-code mb-30">
                                            <pre>
                                                {`li:not(.old)::after {
  content: "New!";
  color: deepPink;
}`}
                                            </pre>
                                        </div>
                                        <div className="postbox-details-text mb-50">
                                            <p>
                                                The specificity of the <span>:not()</span> pseudo-class is the specificity of its argument. The :not() pseudo-class does not add to the selector specificity, unlike other pseudo-classes.
                                            </p>
                                        </div>
                                    </>
                                ) : null}

                                {/* ---- Tags + social ---- */}
                                <div className="postbox-details-tag-wrap d-flex justify-content-between align-items-center">
                                    {tags.length > 0 && (
                                        <div className="tp-blog-sidebar-tagcloud d-flex flex-wrap align-items-center mb-10">
                                            <span className="mr-10 mb-5 d-inline-block">Tagged with :</span>
                                            <div className="tagcloud">
                                                {tags.map((tag) => (
                                                    <Link key={tag} href="#">{tag}</Link>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                    <div className="postbox-details-social mb-10">
                                        {socialLinks.map(({ id, icon, href }) => (
                                            <Link key={id} href={href}>
                                                <span>{icon}</span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>

                                {/* ---- Navigation ---- */}
                                <div className="postbox-details-navigation-wrap mb-35 mt-30 pt-40">
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="postbox-details-navigation mb-30">
                                                <Link href="#">
                                                    <i className="far fa-arrow-left"></i>
                                                    <div className="postbox-details-navigation-text">
                                                        <span>Previous Post</span>
                                                        <h4 className="postbox-details-navigation-title">10 Principles Of Effective <br /> Web Design</h4>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="postbox-details-navigation mb-30 text-end">
                                                <Link href="#" className="justify-content-end">
                                                    <div className="postbox-details-navigation-text">
                                                        <span>Next Post</span>
                                                        <h4 className="postbox-details-navigation-title">Focus on Your Personal<br /> Goals in AI Consulting</h4>
                                                    </div>
                                                    <i className="far fa-arrow-right"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* ---- Author ---- */}
                                <div className="postbox-details-author mt-30">
                                    <PostboxDetailsAuthor
                                        name={post?.authorName}
                                        bio={post?.authorBio}
                                        photo={post?.authorPhoto}
                                        postExistsInDb={postExistsInDb}
                                    />
                                </div>

                                {/* ---- Comments ---- */}
                                <div className="row">
                                    <div className="col-xxl-10">
                                        <div className="postbox__comment pt-75 pb-50">
                                            <h3 className="postbox__comment-title">Comments({String(commentCount).padStart(2, '0')})</h3>
                                            <BlogComments comments={comments} />
                                        </div>
                                    </div>
                                </div>

                                {/* ---- Comment form ---- */}
                                <div className="postbox-details-form">
                                    <h3 className="postbox-details-form-title mb-10">Leave a Reply</h3>
                                    <p>Your email address will not be published. Required fields are marked *</p>
                                    <BlogCommentForm postId={postId} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4">
                        <div className="sidebar-blog-grid-wrap mb-40 ml-115">
                            <BlogSidebar />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostboxDetailsArea;
