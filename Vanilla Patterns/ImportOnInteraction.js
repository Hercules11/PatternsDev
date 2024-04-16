// tl;dr: lay-load non-critical resources when a user interacts with UI requiring it

// dynamic import implementation
// vanilla js
// 方法1
const btn = document.querySelector("button");

btn.addEventListener("click", (e) => {
	e.preventDefault();
	import("lodash.sortBy")
		.then((module) => module.default)
		.then(sortInput())
		.catch((err) => {
			console.log(err);
		});
});


// 方法2
function scriptLoader() {
	/**
	 * Promise-based script loader
	 * @param {string} url
	 * @param {object=} attr
	 * @returns {Promise}
	 */
	const loader = (url, attr) =>
		new Promise((resolve, reject) => {
			const script = window.document.createElement("script");
			script.src = url;
			script.async = true;
			script.crossOrigin = "anonymous";
			attr = attr || {};

			for (const attrName in attr) {
				script[attrName] = attr[attrName];
			}

			script.addEventListener(
				"load",
				() => {
					resolve(script);
				},
				false
			);

			script.addEventListener(
				"error",
				() => {
					reject(script);
				},
				false
			);

			window.document.body.appendChild(script);
		});

	/**
	 * Loads scripts asynchronously
	 * @param {string|string[]} urls
	 * @param {object=} attr Other script tag attributes
	 * @returns {Promise}
	 */
	this.load = (urls, attr) => {
		if (!Array.isArray(urls)) {
			urls = [urls];
		}

		return Promise.all(urls.map((url) => loader(url, attr)));
	};

	/**
	 * Loads scripts asynchronously. It supports multiple url arguments, so each one will be loaded right after the
	 * previous is loaded. This is a way of chaining dependency loading.
	 *
	 * @param {string|string[]} urls, ...
	 * @returns {Promise}
	 */
	this.loadChain = function (urls) {
		const args = Array.isArray(arguments)
			? arguments
			: Array.prototype.slice.call(arguments);
		const p = this.require(args.shift());
		const self = this;
		return args.length
			? p.then(() => {
					self.requireChain(...args);
			  })
			: p;
	};
}

// Inspiration: https://gist.github.com/itsjavi/93cc837dd2213ec0636a
// 获取页面元素，绑定事件，加载脚本，然后隐藏按钮
const loginBtn = document.querySelector("#login");
loginBtn.addEventListener("click", () => {
	const loader = new scriptLoader();
	loader
		.load(["//apis.google.com/js/client:platform.js?onload=showLoginScreen"])
		.then(({ length }) => {
			console.log(`${length} scripts loaded!`);
			loginBtn.style.display = "none";
		});
});


// 自定义了一个方法，用于脚本加载执行
window.showLoginScreen = () => {
	const container = document.querySelector(".abcRioButtonContentWrapper");
	container.click();
};


// in React
// 懒加载， React 内置的方法
import React, { lazy, Suspense } from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
{
const EmojiPicker = lazy(
  () => import('./EmojiPicker')
);

const Channel = () => {

  return (
    <div>
      <MessageList />
      <MessageInput />
      {emojiPickerOpen && (
        <Suspense fallback={<div>Loading...</div>}>
          <EmojiPicker />
        </Suspense>
      )}
    </div>
  );
};}

// 使用动态导入，
import React, { useState, createElement } from "react";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";
import ErrorBoundary from "./ErrorBoundary";

{const Channel = () => {
	const [emojiPickerEl, setEmojiPickerEl] = useState(null);

	const openEmojiPicker = () => {
		import(/* webpackChunkName: "emoji-picker" */ "./EmojiPicker")
			.then((module) => module.default)
			.then((emojiPicker) => {
				setEmojiPickerEl(createElement(emojiPicker));
			});
	};

	const closeEmojiPickerHandler = () => {
		setEmojiPickerEl(null);
	};

	return (
		<ErrorBoundary>
			<div>
				<MessageList />
				<MessageInput onClick={openEmojiPicker} />
				{emojiPickerEl}
			</div>
		</ErrorBoundary>
	);
};
}

// in Vue
{/* <template>
  <div>
    <button @click="show = true">Load Emoji Picker</button>
    <div v-if="show">
      <emojipicker></emojipicker>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => ({ show: false }),
    components: {
      Emojipicker: () => import("./Emojipicker"),
    },
  };
</script> */}