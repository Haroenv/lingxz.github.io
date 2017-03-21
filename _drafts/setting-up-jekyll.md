---
title: Setting up Jekyll
---

So I decided to set up a Jekyll blog. Why? For no reason really. I liked writing in markdown, and Jekyll seemed the obvious choice--easy to use and well-supported by Github. 

It was a fairly painless process. I started with the [Minimal Mistakes theme](https://github.com/mmistakes/minimal-mistakes) by Michael Rose, because it has many things built in, and I thought it was a way for me to learn some of the Jekyll best practices. It can be quite a steep learning curve, though, for non-tech people who just want a normal static blog, especially if you plan on customizing it. 

Most of the time I spent making this was customizing how my blog looks, and learning a bit of `sass` and `liquid` on the way. 

Commenting systems are one of the more troublesome things of a static site. How do you store comments if you don't have a database? There are third party libraries like Disqus that , and if you want to use Disqus with Minimal Mistakes, you just have to register an account with Disqus and put your disqus shortname into the `config.yml` file. 

But I decided to go with Staticman. Since my site is static, why not have a static commenting system? I really like the idea of owning my comments data. Unfortunately the Minimal Mistakes theme only supports Staticman v1 at the moment. 

 

I'm still figuring out what's the best way to have Chinese search on a static site. `lunr` seems easy to incorporate but doesn't work well with Chinese. 