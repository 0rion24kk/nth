// Sample data for demonstration
const data = [
	{
        type: "header", // Tiêu đề ngăn cách
        title: "Hệ Hỏa"
    	},
    {
        image: "1_1.png",
        chinese: "Minh Hựu<br>明佑",
        vietnamese: "Đòn tấn công hoặc trị liệu có xác suất kích hoạt trong <strong><span style='color: #7030A0;'>10 giây</span></strong> với các hiệu ứng: tăng <strong><span style='color: #7030A0;'>360</span></strong> công kích nguyên tố, tăng <strong><span style='color: #7030A0;'>480</span></strong> kiềm chế thủ lĩnh, và tăng <strong><span style='color: #7030A0;'>600</span></strong> phá phòng. Có thể kích hoạt <strong><span style='color: #7030A0;'>2-3</span></strong> hiệu ứng cùng lúc, hồi chiêu <strong><span style='color: #7030A0;'>10 giây</span></strong> (hiệu quả này bị giới hạn trong chế độ Luận Võ, giá trị hiệu quả sẽ giảm)."
    },
    {
        image: "1_2.png",
        chinese: "Điểm Minh Lô<br>点明炉",
        vietnamese: "tăng <strong><span style='color: #7030A0;'>12%</span></strong> sát thương hoặc lượng hồi phục cho tất cả các kỹ năng gây sát thương duy trùy hoặc hồi máu liên tục của nhân vật."
    },
    {
        image: "1_3.png",
        chinese: "Nhật Nguyệt Lưỡng Nghi<br>日月两仪",
        vietnamese: "Khi khí huyết trên <strong><span style='color: #7030A0;'>50%</span></strong>: Tăng hiệu quả gây sát thương (hoặc hồi máu) lên <strong><span style='color: #7030A0;'>5%</span></strong>. Khi khí huyết dưới <strong><span style='color: #7030A0;'>50%</span></strong>: Giảm sát thương nhận vào <strong><span style='color: #7030A0;'>5%</span></strong>. Khi kích hoạt hiệu ứng <strong><span style='color: red;'>Linh Vận</span></strong>: Tăng hiệu quả của các hiệu ứng trên thêm <strong><span style='color: #7030A0;'>50%</span></strong>."
    },
    {
        image: "1_4.png",
        chinese: "Côn Ngô Đoạn Ngọc<br>昆吾断玉",
        vietnamese: "Khi thi triển kỹ năng, xác suất gây sát thương chí mạng tăng thêm <strong><span style='color: #7030A0;'>20%</span></strong> trong <strong><span style='color: #7030A0;'>12 giây</span></strong>, thời gian hồi chiêu <strong><span style='color: #7030A0;'>20 giây</span></strong>. Trong thời gian hiệu lực, mỗi lần chí mạng sẽ nhận được <strong><span style='color: #7030A0;'>1 tầng</span></strong> tăng <strong><span style='color: #7030A0;'>1%</span></strong> sát thương chí mạng, tối đa <strong><span style='color: #7030A0;'>4 tầng</span></strong>. Khi đạt được hiệu ứng <strong><span style='color: red;'>Linh Vận</span></strong>, khi kích hoạt sẽ trực tiếp nhận được đầy đủ tầng tăng sát thương chí mạng và thời gian hiệu lực tăng thêm <strong><span style='color: #7030A0;'>4 giây</span></strong>."
    },
    {
        image: "1_5.png",
        chinese: "Sở Cuồng Ca<br>楚狂歌",
        vietnamese: "Tăng sát thương <strong><span style='color: #7030A0;'>1%</span></strong>. Mỗi khi xung quanh có thêm một kẻ địch, sát thương tăng thêm <strong><span style='color: #7030A0;'>1%</span></strong>, tối đa là <strong><span style='color: #7030A0;'>5%</span></strong>. (Đối với Tố Tâm thì sẽ là tăng trị liệu)"
    },
    {
        image: "1_6.png",
        chinese: "Liêu Nghiệp<br>爆野",
        vietnamese: "Cứ mỗi <strong><span style='color: #7030A0;'>4 giây</span></strong> khi bắt đầu giao tranh, nhân vật sẽ nhận được thêm <strong><span style='color: #7030A0;'>1 tầng</span></strong> sát thương, mỗi tầng tăng <strong><span style='color: #7030A0;'>1.3%</span></strong>. Tối đa lên đến <strong><span style='color: #7030A0;'>6.5%</span></strong> khi đạt được <strong><span style='color: #7030A0;'>5 tầng</span></strong>. Hiệu ứng này sẽ kéo dài <strong><span style='color: #7030A0;'>20 giây</span></strong> sau khi đạt đến <strong><span style='color: #7030A0;'>5 tầng</span></strong>, sau đó sẽ <strong><span style='color: #7030A0;'>reset về 0</span></strong> và bắt đầu tích lũy lại. (Đối với Tố Vấn thì sẽ là tăng trị liệu)"
    },
    {
        image: "1_7.png",
        chinese: "Sở Mục<br>楚穆",
        vietnamese: "Khi tấn công quái vật, gây ra hiệu ứng thiêu đốt với sát thương bằng <strong><span style='color: #7030A0;'>18%</span></strong> tấn công mỗi giây (hiệu ứng này chắc chắn trúng đích), kéo dài trong <strong><span style='color: #7030A0;'>8 giây</span></strong>. Đồng thời, sát thương của bản thân đối với quái vật bị thiêu đốt bởi Sở Mục tăng <strong><span style='color: #7030A0;'>2%</span></strong>. Với mục tiêu là Thủ lĩnh, thời gian hồi chiêu là <strong><span style='color: #7030A0;'>12 giây</span></strong>, còn với mục tiêu không phải Thủ lĩnh thì không có thời gian hồi chiêu."
    },
    {
    image: "1_8.png",
    chinese: "Liệt Tinh<br>列星隔",
    vietnamese: "Khi tấn công mục tiêu, có xác suất cộng dồn <strong><span style='color: #7030A0;'>\"Dấu Ấn Liệt Tinh\"</span></strong>. Khi dấu hiệu này tích đủ <strong><span style='color: #7030A0;'>5 tầng</span></strong>, sẽ gây ra một vụ nổ diện rộng, gây sát thương bằng <strong><span style='color: #7030A0;'>120%</span></strong> tấn công, đồng thời gây cho các mục tiêu trong phạm vi <strong><span style='color: #7030A0;'>63%</span></strong> sát thương kèm theo <strong><span style='color: #7030A0;'>5 giây</span></strong> trọng thương. Thời gian hồi chiêu là <strong><span style='color: #7030A0;'>15 giây</span></strong>."
    },
    {
    image: "1_9.png",
    chinese: "Đãng Kiếm Dương Ba<br>荡剑扬波",
    vietnamese: "Khi tấn công hoặc chữa trị, có <strong><span style='color: #7030A0;'>20%</span></strong> xác suất khiến tối đa <strong><span style='color: #7030A0;'>5 lần</span></strong> tấn công tiếp theo trong <strong><span style='color: #7030A0;'>6 giây</span></strong> luôn bạo kích. Hồi chiêu <strong><span style='color: #7030A0;'>30 giây</span></strong>. Sau khi nhận được hiệu ứng <strong><span style='color: red;'>Linh Vận</span></strong>, số lần bạo kích đảm bảo tăng lên thành <strong><span style='color: #7030A0;'>8 lần</span></strong>."
    },

{
        type: "header", // Tiêu đề ngăn cách
        title: "Hệ Mộc"
    },
    {
        image: "2_1.png",
        chinese: "Tuyệt Điện Phi Quang<br>绝电飞光",
        vietnamese: "Khi tấn công, có xác suất dẫn sét, gây sát thương bằng <strong><span style='color: #7030A0;'>210%</span></strong> tấn công và gây choáng trong <strong><span style='color: #7030A0;'>0.8 giây</span></strong> cho người chơi. Đối với quái vật, sát thương gấp đôi nhưng không gây choáng. Hồi chiêu <strong><span style='color: #7030A0;'>15 giây</span></strong> (đối với Tố Tâm, kỹ năng sẽ trở thành một lần hồi máu cao). Sau khi nhận được hiệu ứng <strong><span style='color: red;'>Linh Vận</span></strong>, khi kích hoạt sẽ dẫn sét thêm một lần nữa, với sát thương giảm <strong><span style='color: #7030A0;'>50%</span></strong> và không gây choáng."
    },
    {
        image: "2_2.png",
        chinese: "Thông Vi<br>通微",
        vietnamese: "Khi sử dụng kỹ năng gây sát thương hoặc trị liệu không phải là đòn tấn công thường, gây thêm sát thương hệ Mộc bằng <strong><span style='color: #7030A0;'>50%</span></strong> tấn công. Nếu trúng người chơi, nhận <strong><span style='color: #7030A0;'>2.5%</span></strong> Khắc chế các phái; nếu không, nhận <strong><span style='color: #7030A0;'>600</span></strong> điểm Khắc chế thủ lĩnh, kéo dài <strong><span style='color: #7030A0;'>5 giây</span></strong>, hồi chiêu <strong><span style='color: #7030A0;'>4 giây</span></strong> (đối với Tố Tâm, chuyển đổi theo tỷ lệ thành cường độ trị liệu)."
    },
    {
        image: "2_3.png",
        chinese: "Tựa Xuân Thu<br>序春秋",
        vietnamese: "Khi sử dụng kỹ năng, có xác suất gây sát thương bằng <strong><span style='color: #7030A0;'>200%</span></strong> Tấn Công. Nếu mục tiêu là quái vật, sát thương này sẽ kèm theo một giá trị cố định cao. Thời gian hồi chiêu là <strong><span style='color: #7030A0;'>8 giây</span></strong>. (Đối với Tố Tâm, hiệu ứng này sẽ chuyển thành một lần hồi phục với giá trị cao.)"
    },
    {
        image: "2_4.png",
        chinese: "Phá Trọng Vân<br>破重云",
        vietnamese: "Khi tấn công, có xác suất gây sát thương hệ Mộc phạm vi bằng <strong><span style='color: #7030A0;'>150%</span></strong> tấn công (sát thương đối với quái vật được nhân đôi), và trong <strong><span style='color: #7030A0;'>10 giây</span></strong>, tùy theo số lượng mục tiêu trúng đòn mà tăng Khắc chế quái vật (bao gồm Khắc chế thủ lĩnh và Khắc chế kiến trúc), tối đa tăng <strong><span style='color: #7030A0;'>15%</span></strong>. Hồi chiêu <strong><span style='color: #7030A0;'>20 giây</span></strong>."
    },
    {
        image: "2_5.png",
        chinese: "Phiêu Phong Tuyệt Nhận<br>漂风绝刃",
        vietnamese: "Tăng <strong><span style='color: #7030A0;'>400</span></strong> điểm Hội tâm, khi đạt bạo kích gây thêm sát thương hệ Phong bằng <strong><span style='color: #7030A0;'>60%</span></strong> tấn công (đối với Tố Tâm thì chuyển thành trị liệu), hồi chiêu <strong><span style='color: #7030A0;'>3 giây</span></strong>. Khi nhận được hiệu quả <strong><span style='color: red;'>Linh Vận</span></strong>, giá trị Hội tâm tăng thêm và hệ số sát thương bổ sung đều tăng <strong><span style='color: #7030A0;'>50%</span></strong>."
    },
    {
        image: "2_6.png",
        chinese: "Hồng Ảnh<br>鸿影",
        vietnamese: "Sau khi vào trận chiến, tốc độ di chuyển tăng <strong><span style='color: #7030A0;'>30%</span></strong> và tấn công tăng <strong><span style='color: #7030A0;'>5%</span></strong>, hiệu ứng sẽ bị loại bỏ sau khi nhận <strong><span style='color: #7030A0;'>3 lần</span></strong> sát thương lớn. Nếu trong <strong><span style='color: #7030A0;'>4 giây</span></strong> không nhận sát thương, sẽ khôi phục lại hiệu ứng tăng cường."
    },
    {
        image: "2_7.png",
        chinese: "Sâm Hàn Vực<br>森寒域",
        vietnamese: "Khi tấn công, bắn ra đạn nguyên tố Mộc và lan ra các kẻ địch xung quanh. Khi trúng mục tiêu, đạn sẽ phát nổ, gây sát thương phạm vi bằng <strong><span style='color: #7030A0;'>80%</span></strong> tấn công và làm phong mạch (tê liệt) trong <strong><span style='color: #7030A0;'>1.5 giây</span></strong>. Hồi chiêu <strong><span style='color: #7030A0;'>20 giây</span></strong>, có thể giảm xuống còn <strong><span style='color: #7030A0;'>10 giây</span></strong> tùy theo số lượng mục tiêu trúng đạn. (Đối với Tố Tâm, kỹ năng sẽ trở thành hồi máu nhóm)."
    },
    {
        image: "2_8.png",
        chinese: "Lăng Cung<br>凌宫",
        vietnamese: "Sau khi sử dụng kỹ năng, tùy theo số lượng kỹ năng tiếp theo được tung ra trong <strong><span style='color: #7030A0;'>5 giây</span></strong>, sẽ phóng một đạn nguyên tố Mộc vào mục tiêu ngẫu nhiên của kẻ địch và tăng <strong><span style='color: #7030A0;'>1.5 giây</span></strong> sát thương của bản thân trong <strong><span style='color: #7030A0;'>5 giây</span></strong>. Tối đa gây sát thương đơn thể bằng <strong><span style='color: #7030A0;'>125%</span></strong> tấn công."
    },
    {
        image: "2_9.png",
        chinese: "Phủ Ngưỡng Thái Hư<br>俯仰太虚",
        vietnamese: "Khi bị khống chế, nếu tất cả các kỹ năng giải khống của môn phái đều đang trong thời gian hồi chiêu, thì giảm <strong><span style='color: #7030A0;'>3 giây</span></strong> hồi chiêu của kỹ năng giải khống và nhận <strong><span style='color: #7030A0;'>15%</span></strong> giảm sát thương trong <strong><span style='color: #7030A0;'>3 giây</span></strong>. Hồi chiêu <strong><span style='color: #7030A0;'>12 giây</span></strong>. Sau khi nhận được hiệu ứng <strong><span style='color: red;'>Linh Vận</span></strong>, thời gian giảm sát thương và giảm hồi chiêu đều tăng lên thành <strong><span style='color: #7030A0;'>4 giây</span></strong>."
    },
    {
        image: "2_10.png",
        chinese: "Bất Động Minh Vương<br>不动明王",
        vietnamese: "Khi đỡ đòn và chịu khống chế mạnh, kích phát khí lực, miễn dịch khống chế cho lần này. Hồi chiêu <strong><span style='color: #7030A0;'>35 giây</span></strong>. Sau khi nhận được hiệu ứng <strong><span style='color: #7030A0;'>Linh Vận</span></strong>, sau khi kích hoạt, nhận thêm <strong><span style='color: #7030A0;'>2 giây</span></strong> bá thể và giảm <strong><span style='color: #7030A0;'>30%</span></strong>."
    },
{
        type: "header", // Tiêu đề ngăn cách
        title: "Hệ Kim"
    },
    {
        image: "3_1.png",
        chinese: "Tuyệt Điện Phi Quang<br>绝电飞光",
        vietnamese: "Khi tấn công, có xác suất dẫn sét, gây sát thương bằng <strong><span style='color: #7030A0;'>210%</span></strong> tấn công và gây choáng trong <strong><span style='color: #7030A0;'>0.8 giây</span></strong> cho người chơi. Đối với quái vật, sát thương gấp đôi nhưng không gây choáng. Hồi chiêu <strong><span style='color: #7030A0;'>15 giây</span></strong> (đối với Tố Tâm, kỹ năng sẽ trở thành một lần hồi máu cao). Sau khi nhận được hiệu ứng <strong><span style='color: red;'>Linh Vận</span></strong>, khi kích hoạt sẽ dẫn sét thêm một lần nữa, với sát thương giảm <strong><span style='color: #7030A0;'>50%</span></strong> và không gây choáng."
    },
    {
        image: "3_2.png",
        chinese: "Phiêu Phong Tuyệt Kiếm<br>漂风绝刃",
        vietnamese: "Tăng <strong><span style='color: #7030A0;'>400</span></strong> điểm bạo kích. Khi bạo kích, gây sát thương nguyên tố Phong bằng <strong><span style='color: #7030A0;'>60%</span></strong> tấn công (đối với Tố Tâm sẽ trở thành hồi máu). Hồi chiêu <strong><span style='color: #7030A0;'>3 giây</span></strong>. Sau khi nhận được hiệu ứng <strong><span style='color: red;'>Linh Vận</span></strong>, giá trị bạo kích và hệ số sát thương thêm đều được tăng <strong><span style='color: #7030A0;'>50%</span></strong>."
    },
    {
        image: "3_3.png",
        chinese: "Côn Ngô Đoạn Ngọc<br>昆吾断玉",
        vietnamese: "Khi thi triển kỹ năng, có xác suất tăng <strong><span style='color: #7030A0;'>20%</span></strong> sát thương bạo kích trong <strong><span style='color: #7030A0;'>12 giây</span></strong>. Hồi chiêu <strong><span style='color: #7030A0;'>20 giây</span></strong>. Trong thời gian này, mỗi lần bạo kích sẽ nhận thêm <strong><span style='color: #7030A0;'>1%</span></strong> sát thương bạo kích (tối đa <strong><span style='color: #7030A0;'>4 tầng</span></strong>). Sau khi nhận được hiệu ứng <strong><span style='color: red;'>Linh Vận</span></strong>, khi kích hoạt sẽ ngay lập tức nhận được tối đa tầng sát thương bạo kích, và thời gian duy trì tăng thêm <strong><span style='color: #7030A0;'>4 giây</span></strong>."
    },
    {
        image: "3_4.png",
        chinese: "Phá Phủ<br>破釜",
        vietnamese: "Tấn công tăng <strong><span style='color: #7030A0;'>8%</span></strong>, nhận sát thương tăng <strong><span style='color: #7030A0;'>3%</span></strong>."
    },
    {
        image: "3_5.png",
        chinese: "Hám Kim Pháp<br>撼金阀",
        vietnamese: "Khắc chế thủ lĩnh tăng <strong><span style='color: #7030A0;'>2%</span></strong>, mỗi <strong><span style='color: #7030A0;'>200</span></strong> điểm Hội tâm tăng thêm <strong><span style='color: #7030A0;'>40</span></strong> điểm Khắc chế thủ lĩnh, tối đa <strong><span style='color: #7030A0;'>600</span></strong> điểm (đối với Tố Tâm, chuyển đổi theo tỷ lệ thành cường độ trị liệu)."
    },
    {
        image: "3_6.png",
        chinese: "Kinh Sơn Nguyệt<br>惊山月",
        vietnamese: "Khi vào trận chiến, trong <strong><span style='color: #7030A0;'>6 giây</span></strong> đầu nhận được <strong><span style='color: #7030A0;'>10%</span></strong> phòng ngự các phái. Sau đó, mỗi <strong><span style='color: #7030A0;'>20 giây</span></strong> có thể kích hoạt lại một lần."
    },
    {
        image: "3_7.png",
        chinese: "Tiêu Can Qua<br>销干戈",
        vietnamese: "Khi tấn công, có xác suất nhận được <strong><span style='color: #7030A0;'>7%</span></strong> Khắc chế thủ lĩnh trong <strong><span style='color: #7030A0;'>8 giây</span></strong>, và mỗi khi có một quái vật địch xung quanh sẽ tăng thêm <strong><span style='color: #7030A0;'>1%</span></strong> Khắc chế thủ lĩnh, tối đa tăng <strong><span style='color: #7030A0;'>6%</span></strong>. Hồi chiêu <strong><span style='color: #7030A0;'>10 giây</span></strong>. (đối với Tố Tâm, tăng cường trị liệu)."
    },
    {
        image: "3_8.png",
        chinese: "Đoạn Kim Câu<br>断金戈",
        vietnamese: "Tăng <strong><span style='color: #7030A0;'>12%</span></strong> sát thương/chữa trị từ kỹ năng bùng nổ. Có thể xem kỹ năng bạo phát trong mục chi tiết kỹ năng."
    },
    {
        image: "3_9.png",
        chinese: "Phục Hồn<br>傅魂",
        vietnamese: "Khi xung quanh có kẻ địch là người chơi có khí huyết dưới <strong><span style='color: #7030A0;'>30%</span></strong>, tăng <strong><span style='color: #7030A0;'>4%</span></strong> khắc chế các phái cho bản thân. Nếu tiêu diệt kẻ địch, trong <strong><span style='color: #7030A0;'>5 giây</span></strong> nhận được hiệu ứng gấp đôi, tăng <strong><span style='color: #7030A0;'>8%</span></strong> khắc chế các phái. Hiệu ứng không chồng chất."
    },
    {
        image: "3_10.png",
        chinese: "Đãng Kiếm Dương Ba<br>荡剑扬波",
        vietnamese: "Khi tấn công hoặc chữa trị, có <strong><span style='color: #7030A0;'>20%</span></strong> xác suất khiến tối đa <strong><span style='color: #7030A0;'>5 lần</span></strong> tấn công tiếp theo trong <strong><span style='color: #7030A0;'>6 giây</span></strong> luôn bạo kích. Hồi chiêu <strong><span style='color: #7030A0;'>30 giây</span></strong>. Sau khi nhận được hiệu ứng <strong><span style='color: red;'>Linh Vận</span></strong>, số lần bạo kích đảm bảo tăng lên thành <strong><span style='color: #7030A0;'>8 lần</span></strong>."
    },
    {
        image: "3_11.png",
        chinese: "Phủ Ngưỡng Thái Hư<br>荡剑扬波",
        vietnamese: "Khi bị khống chế và tất cả các kỹ năng giải khống của môn phái đều đang trong thời gian hồi chiêu, giảm <strong><span style='color: #7030A0;'>3 giây</span></strong> hồi chiêu của kỹ năng giải khống và nhận <strong><span style='color: #7030A0;'>15%</span></strong> giảm sát thương trong <strong><span style='color: #7030A0;'>3 giây</span></strong>. Hồi chiêu <strong><span style='color: #7030A0;'>12 giây</span></strong>. Sau khi nhận được hiệu ứng <strong><span style='color: red;'>Linh Vận</span></strong>, thời gian giảm sát thương và giảm hồi chiêu đều tăng lên thành <strong><span style='color: #7030A0;'>4 giây</span></strong>."
    },
{
        type: "header", // Tiêu đề ngăn cách
        title: "Hệ Thổ"
    },
    {
        image: "3_1.png",
        chinese: "Tuyệt Điện Phi Quang<br>绝电飞光",
        vietnamese: "Khi tấn công, có xác suất dẫn sét, gây sát thương bằng <strong><span style='color: #7030A0;'>210%</span></strong> tấn công và gây choáng trong <strong><span style='color: #7030A0;'>0.8 giây</span></strong> cho người chơi. Đối với quái vật, sát thương gấp đôi nhưng không gây choáng. Hồi chiêu <strong><span style='color: #7030A0;'>15 giây</span></strong> (đối với Tố Tâm, kỹ năng sẽ trở thành một lần hồi máu cao). Sau khi nhận được hiệu ứng <strong><span style='color: red;'>Linh Vận</span></strong>, khi kích hoạt sẽ dẫn sét thêm một lần nữa, với sát thương giảm <strong><span style='color: #7030A0;'>50%</span></strong> và không gây choáng."
    },
    {
        image: "3_1.png",
        chinese: "Tuyệt Điện Phi Quang<br>绝电飞光",
        vietnamese: "Khi tấn công, có xác suất dẫn sét, gây sát thương bằng <strong><span style='color: #7030A0;'>210%</span></strong> tấn công và gây choáng trong <strong><span style='color: #7030A0;'>0.8 giây</span></strong> cho người chơi. Đối với quái vật, sát thương gấp đôi nhưng không gây choáng. Hồi chiêu <strong><span style='color: #7030A0;'>15 giây</span></strong> (đối với Tố Tâm, kỹ năng sẽ trở thành một lần hồi máu cao). Sau khi nhận được hiệu ứng <strong><span style='color: red;'>Linh Vận</span></strong>, khi kích hoạt sẽ dẫn sét thêm một lần nữa, với sát thương giảm <strong><span style='color: #7030A0;'>50%</span></strong> và không gây choáng."
    },
    {
        image: "3_1.png",
        chinese: "Tuyệt Điện Phi Quang<br>绝电飞光",
        vietnamese: "Khi tấn công, có xác suất dẫn sét, gây sát thương bằng <strong><span style='color: #7030A0;'>210%</span></strong> tấn công và gây choáng trong <strong><span style='color: #7030A0;'>0.8 giây</span></strong> cho người chơi. Đối với quái vật, sát thương gấp đôi nhưng không gây choáng. Hồi chiêu <strong><span style='color: #7030A0;'>15 giây</span></strong> (đối với Tố Tâm, kỹ năng sẽ trở thành một lần hồi máu cao). Sau khi nhận được hiệu ứng <strong><span style='color: red;'>Linh Vận</span></strong>, khi kích hoạt sẽ dẫn sét thêm một lần nữa, với sát thương giảm <strong><span style='color: #7030A0;'>50%</span></strong> và không gây choáng."
    },
    {
        image: "3_1.png",
        chinese: "Tuyệt Điện Phi Quang<br>绝电飞光",
        vietnamese: "Khi tấn công, có xác suất dẫn sét, gây sát thương bằng <strong><span style='color: #7030A0;'>210%</span></strong> tấn công và gây choáng trong <strong><span style='color: #7030A0;'>0.8 giây</span></strong> cho người chơi. Đối với quái vật, sát thương gấp đôi nhưng không gây choáng. Hồi chiêu <strong><span style='color: #7030A0;'>15 giây</span></strong> (đối với Tố Tâm, kỹ năng sẽ trở thành một lần hồi máu cao). Sau khi nhận được hiệu ứng <strong><span style='color: red;'>Linh Vận</span></strong>, khi kích hoạt sẽ dẫn sét thêm một lần nữa, với sát thương giảm <strong><span style='color: #7030A0;'>50%</span></strong> và không gây choáng."
    },
    {
        image: "3_1.png",
        chinese: "Tuyệt Điện Phi Quang<br>绝电飞光",
        vietnamese: "Khi tấn công, có xác suất dẫn sét, gây sát thương bằng <strong><span style='color: #7030A0;'>210%</span></strong> tấn công và gây choáng trong <strong><span style='color: #7030A0;'>0.8 giây</span></strong> cho người chơi. Đối với quái vật, sát thương gấp đôi nhưng không gây choáng. Hồi chiêu <strong><span style='color: #7030A0;'>15 giây</span></strong> (đối với Tố Tâm, kỹ năng sẽ trở thành một lần hồi máu cao). Sau khi nhận được hiệu ứng <strong><span style='color: red;'>Linh Vận</span></strong>, khi kích hoạt sẽ dẫn sét thêm một lần nữa, với sát thương giảm <strong><span style='color: #7030A0;'>50%</span></strong> và không gây choáng."
    },
    {
        image: "3_1.png",
        chinese: "Tuyệt Điện Phi Quang<br>绝电飞光",
        vietnamese: "Khi tấn công, có xác suất dẫn sét, gây sát thương bằng <strong><span style='color: #7030A0;'>210%</span></strong> tấn công và gây choáng trong <strong><span style='color: #7030A0;'>0.8 giây</span></strong> cho người chơi. Đối với quái vật, sát thương gấp đôi nhưng không gây choáng. Hồi chiêu <strong><span style='color: #7030A0;'>15 giây</span></strong> (đối với Tố Tâm, kỹ năng sẽ trở thành một lần hồi máu cao). Sau khi nhận được hiệu ứng <strong><span style='color: red;'>Linh Vận</span></strong>, khi kích hoạt sẽ dẫn sét thêm một lần nữa, với sát thương giảm <strong><span style='color: #7030A0;'>50%</span></strong> và không gây choáng."
    },
    {
        image: "3_1.png",
        chinese: "Tuyệt Điện Phi Quang<br>绝电飞光",
        vietnamese: "Khi tấn công, có xác suất dẫn sét, gây sát thương bằng <strong><span style='color: #7030A0;'>210%</span></strong> tấn công và gây choáng trong <strong><span style='color: #7030A0;'>0.8 giây</span></strong> cho người chơi. Đối với quái vật, sát thương gấp đôi nhưng không gây choáng. Hồi chiêu <strong><span style='color: #7030A0;'>15 giây</span></strong> (đối với Tố Tâm, kỹ năng sẽ trở thành một lần hồi máu cao). Sau khi nhận được hiệu ứng <strong><span style='color: red;'>Linh Vận</span></strong>, khi kích hoạt sẽ dẫn sét thêm một lần nữa, với sát thương giảm <strong><span style='color: #7030A0;'>50%</span></strong> và không gây choáng."
    },
    {
        image: "3_1.png",
        chinese: "Tuyệt Điện Phi Quang<br>绝电飞光",
        vietnamese: "Khi tấn công, có xác suất dẫn sét, gây sát thương bằng <strong><span style='color: #7030A0;'>210%</span></strong> tấn công và gây choáng trong <strong><span style='color: #7030A0;'>0.8 giây</span></strong> cho người chơi. Đối với quái vật, sát thương gấp đôi nhưng không gây choáng. Hồi chiêu <strong><span style='color: #7030A0;'>15 giây</span></strong> (đối với Tố Tâm, kỹ năng sẽ trở thành một lần hồi máu cao). Sau khi nhận được hiệu ứng <strong><span style='color: red;'>Linh Vận</span></strong>, khi kích hoạt sẽ dẫn sét thêm một lần nữa, với sát thương giảm <strong><span style='color: #7030A0;'>50%</span></strong> và không gây choáng."
    },
    {
        image: "3_1.png",
        chinese: "Tuyệt Điện Phi Quang<br>绝电飞光",
        vietnamese: "Khi tấn công, có xác suất dẫn sét, gây sát thương bằng <strong><span style='color: #7030A0;'>210%</span></strong> tấn công và gây choáng trong <strong><span style='color: #7030A0;'>0.8 giây</span></strong> cho người chơi. Đối với quái vật, sát thương gấp đôi nhưng không gây choáng. Hồi chiêu <strong><span style='color: #7030A0;'>15 giây</span></strong> (đối với Tố Tâm, kỹ năng sẽ trở thành một lần hồi máu cao). Sau khi nhận được hiệu ứng <strong><span style='color: red;'>Linh Vận</span></strong>, khi kích hoạt sẽ dẫn sét thêm một lần nữa, với sát thương giảm <strong><span style='color: #7030A0;'>50%</span></strong> và không gây choáng."
    },

    // Thêm nhiều dữ liệu hơn nếu cần
];
;

function populateTable() {
    const tableBody = document.querySelector('#data-table tbody');
    
    data.forEach((item, index) => {
        if (item.type === "header") {
            // Tạo và chèn tiêu đề phân cách
            const headerRow = document.createElement('tr');
            headerRow.className = 'section-header';
            headerRow.innerHTML = `<td colspan="3">${item.title}</td>`;
            tableBody.appendChild(headerRow);
        } else {
            // Tạo và chèn dòng dữ liệu
            const row = document.createElement('tr');
            row.innerHTML = `
                <td><img src="noicong/${item.image}" alt="Image ${index + 1}"></td>
                <td class="center-column">${item.chinese}</td>
                <td class="text-column">${item.vietnamese}</td>
            `;
            tableBody.appendChild(row);
        }
    });
}

// Gọi hàm để tạo bảng khi trang tải
window.onload = populateTable;

