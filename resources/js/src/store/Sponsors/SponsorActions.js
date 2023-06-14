export default {
	async fetchSponsors({commit},route){
		var fetchingSponsors = await axios.get('admin/ajax/get-sponsors?route='+route)
		var fetchedSponsors = fetchingSponsors.data.users;
		commit('setSponsors',fetchedSponsors);
	},
    async getSponsor({commit},id){
        var fetchingSponsor = await axios.get('admin/ajax/get-sponsor/'+id)
        var fetchedSponsor = fetchingSponsor.data.user;
        commit('setSponsor',fetchedSponsor);
    },
    async updateSponsor({commit},params){
       let sendingForm = await axios.post('admin/ajax/update-sponsor',params.fd);
       let sentForm = sendingForm;
       if(sentForm.data.status == true){
        params.notify({
          position : 'right-top',
          color : 'success',
          text : sentForm.data.msg,
          icon : 'check_circle_outline'
        });
        commit('updateSponsor',sentForm.data.sponsor);
      }else{
        params.notify({
          position : 'right-top',
          color : 'danger',
          text : sentForm.data.msg,
          icon : 'warning'
        });
      }
      setTimeout(function(){
        params.closeLoader();
      },1000)
       return sentForm;
       // sendingForm.data.
    },
    async updatePackage({commit},params){
       let sendingForm = await axios.post('admin/ajax/update-package',params.fd);
       let sentForm = sendingForm;
       if(sentForm.data.status == true){
        params.notify({
          position : 'right-top',
          color : 'success',
          text : sentForm.data.msg,
          icon : 'check_circle_outline'
        });
        commit('updateSponsor',sentForm.data.sponsor);
      }else{
        params.notify({
          position : 'right-top',
          color : 'danger',
          text : sentForm.data.msg,
          icon : 'warning'
        });
      }
      setTimeout(function(){
        params.closeLoader();
      },1000)
       return sentForm;
       // sendingForm.data.
    },
	async changeStatus({commit},data){

		commit('changeStatus',{id : data.id, route : data.route});
		var changeStatus = await axios.post('admin/ajax/change-sponsor-status?id='+data.id)
		if(changeStatus.data.status == true) {
            data.notify({
                position: 'right-top',
                color: 'success',
                text: changeStatus.data.msg,
                icon: 'check_circle_outline'
            });

        } else {
            data.notify({
                position: 'right-top',
                color: 'danger',
                text: changeStatus.data.msg,
                icon: 'warning'
            });
        }

	},
    async deleteUser({commit},data){

        commit('deleteUser',{id : data.id, route : data.route});
        var deleteUser = await axios.post('admin/ajax/delete-user?id='+data.id)
        if(deleteUser.data.status == true) {
            data.notify({
                position: 'right-top',
                color: 'success',
                text: deleteUser.data.msg,
                icon: 'check_circle_outline'
            });

        } else {
            data.notify({
                position: 'right-top',
                color: 'danger',
                text: deleteUser.data.msg,
                icon: 'warning'
            });
        }

    },
    async changeStatusSingle({commit},data){

        commit('changeStatusSingle',data);
        var changeStatus = await axios.post('admin/ajax/change-sponsor-status?id='+data.id)
        if(changeStatus.data.status == true) {
            data.notify({
                position: 'right-top',
                color: 'success',
                text: changeStatus.data.msg,
                icon: 'check_circle_outline'
            });

        } else {
            data.notify({
                position: 'right-top',
                color: 'danger',
                text: changeStatus.data.msg,
                icon: 'warning'
            });
        }

    },
    submitExportMember({commit},data){
      return axios.post('admin/ajax/export-members',data.fd);
    }
}
