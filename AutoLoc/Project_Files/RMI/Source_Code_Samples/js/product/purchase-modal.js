/*globals urlList */
$(() => {
	const modalSetting = () => {
		// Modal Setting
		const modalConfig = {
			background: '#505050',
			custom_class: 'c-Modal',
			overlay_opacity: 0.8,
			content_source: '#modal'
		};
		$('#modal').modaal(modalConfig);
		$('.product-detail-Hero_Btn-modal, .product-detail-Layout_Btn-modal').on('click', (event) => {
			if ($(event.currentTarget).hasClass('bundle')) return;
			$('#modal').modaal('open');
		});
		$('#modaal-close').on('click', () => {
			$('#modal').modaal('close');
		});

		// Push Color Button
		$('.question-color-button').on('click', (event) => {
			$('.color-warning').hide();
			$('.question-color-button').attr({'aria-invalid': false, 'aria-selected': false});
			$(event.currentTarget).attr('aria-selected', true);
			soldoutCheck();
		});

		// Push Select Button
		$('.question-select').on('change', 'input[type="radio"]', () => {
			selectCheck();
		});

		// Push Buy Button
		$('.purchase-drilldown-buy').on('click', () => {
			confirmCheck();
		});
	};

	const soldoutCheck = () => {
		const selectColor = Object.entries($('.question-color-button'));
		const selectColorLength = $('.question-color-button').length;
		const selectColorTarget = selectColor.filter((item, index) => {
			if(index < selectColorLength) return item;
		});
		const selectColorId = selectColorTarget.some(value => value[1].getAttribute('aria-selected') === 'true') ? selectColorTarget.filter(value => value[1].getAttribute('aria-selected') === 'true')[0][1].dataset.id: false;
		const soldoutElement = $(`.${selectColorId}`);

		if(soldoutElement.length) {
			$('.soldout').prop('disabled', false);
			soldoutElement.prop('disabled', true);
			soldoutElement.prop('checked', false);
		} else {
			$('.soldout').prop('disabled', false);
		}
	};

	const selectCheck = () => {
		// Input Color Check
		const selectColor = Object.entries($('.question-color-button'));
		const selectColorLength = $('.question-color-button').length;
		const selectColorTarget = selectColor.filter((item, index) => {
			if(index < selectColorLength) return item;
		});
		const selectColorName = selectColorTarget.some(value => value[1].getAttribute('aria-selected') === 'true') ? selectColorTarget.filter(value => value[1].getAttribute('aria-selected') === 'true')[0][1].innerText.trim() : false;

		// Input free Check
		const questionCount = $(".purchase-drilldown-question").length;
		let selectList = [];
		let selectUrl = [];
		for(let i = 0; i < questionCount; i++){
			selectList.push($(`input[name=faq_${i}]:checked`).val());
			selectUrl.push($(`input[name=faq_${i}]:checked`).data('id'));
		}
		const inputClearCheck = selectList.some(value => {
			if(value === undefined) {
				$('.purchase-drilldown-buy a').removeAttr("href");
				return true;
			} else {
				return false;
			}
		});
		selectList.forEach((value, index) => {
			if(value) {
				$(`.purchase-drilldown-question-${index}`).find('h4').hide();
				$(`.question-select-button-${index}[aria-invalid]`).attr('aria-invalid', false);
			}
		});
		if (!selectColorName || inputClearCheck) return;

		// Url Set
		const url = `${selectUrl.join('_')}`;
		$('.purchase-drilldown-buy a').attr('href', urlList[url]);
	};

	const confirmCheck = () => {
		// Color Select Check
		const selectColor = Object.entries($('.question-color-button'));
		const selectColorLength = $('.question-color-button').length;
		const selectColorTarget = selectColor.filter((item, index) => {
			if(index < selectColorLength) return item;
		});
		const selectColorCheck = selectColorTarget.some(value => value[1].getAttribute('aria-selected') === 'true');
		if(!selectColorCheck) {
			$('.color-warning').show();
			$('.question-color-button[aria-invalid]').attr('aria-invalid', true);
		}

		// Free input Check
		const questionCount = $(".purchase-drilldown-question").length;
		let selectList = [];
		let selectUrl = [];
		for(let i = 0; i < questionCount; i++){
			selectList.push($(`input[name=faq_${i}]:checked`).val());
			selectUrl.push($(`input[name=faq_${i}]:checked`).data('id'));
		}
		const inputClearCheck = selectList.some(value => {
			if(value === undefined) {
				return true;
			} else {
				return false;
			}
		});
		selectList.forEach((value, index) => {
			if(value === undefined) {
				$(`.purchase-drilldown-question-${index}`).find('h4').show();
				$(`.question-select-button-${index}[aria-invalid]`).attr('aria-invalid', true);
			}
		});
		if (!selectColorCheck || inputClearCheck) return;

		// Url Set
		const url = `${selectUrl.join('_')}`;
		$('.purchase-drilldown-buy a').attr('href', urlList[url]);
	};

	/* Start Execute */
	modalSetting();
});
