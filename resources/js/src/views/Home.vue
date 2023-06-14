<template>
    <div>
        <vs-row>
        	<vs-col vs-lg="6">
        		
        	<h2>Welcome To RC Directory CMS!</h2>
        	<small class="text-base">These Stats are for <strong>{{ currentStat }}!</strong></small>
        	</vs-col>
        	<vs-col vs-lg="6" class="text-right">
        		  <change-time-duration-dropdown @timeDurationChanged="changeDuration"/>
        	
        	</vs-col>
            <vs-col class="mt-base" vs-md="4" vs-lg="4">
                <statistics-card-line icon="ShoppingBagIcon" :statistic="data.products || 0" statisticTitle="Products" :chartData="ordersReceviedChartData" color='primary' type='area' />
            </vs-col>
            <vs-col class="mt-base" vs-md="4" vs-lg="4">
                <statistics-card-line icon="BookOpenIcon" :statistic="data.resources || 0" statisticTitle="Resources" :chartData="ordersReceviedChartData" color='primary' type='area' />
            </vs-col>
            <vs-col class="mt-base" vs-md="4" vs-lg="4">
                <statistics-card-line icon="UsersIcon" :statistic="data.sponsors || 0" statisticTitle="Sponsors" :chartData="ordersReceviedChartData" color='primary' type='area' />
            </vs-col>
            <vs-col class="mt-base" vs-md="4" vs-lg="4">
                <statistics-card-line icon="UsersIcon" :statistic="data.subscribers || 0" statisticTitle="Subscribers" :chartData="ordersReceviedChartData" color='primary' type='area' />
            </vs-col>
            <vs-col class="mt-base" vs-md="4" vs-lg="4">
                <statistics-card-line icon="TvIcon" :statistic="data.views || 0" statisticTitle="Total Views" :chartData="ordersReceviedChartData" color='primary' type='area' />
            </vs-col>
            <vs-col class="mt-base" vs-md="4" vs-lg="4">
                <statistics-card-line icon="DownloadIcon" :statistic="data.downloads || 0" statisticTitle="Total Downloads" :chartData="ordersReceviedChartData" color='primary' type='area' />
            </vs-col>
        </vs-row>
    </div>
</template>
<script>
import StatisticsCardLine from '@/components/statistics-cards/StatisticsCardLine.vue';
import analyticsData from '@/components/analyticsData.js';
import ChangeTimeDurationDropdown from '@/components/ChangeTimeDurationDropdown.vue'
export default {
    data() {
        return {
            ordersReceviedChartData: analyticsData.subscribersGained,
            data : {},
            currentStat : 'This month',
        };
    },
    components: {
        StatisticsCardLine,
        ChangeTimeDurationDropdown
    },
    created(){
    	this.changeDuration();
    },
    methods: {
      async changeDuration(duration = '') {
      	if(duration != ''){
      	this.currentStat = _.upperFirst(duration.replace('-',' '));
      	}
        	let fetchDashboardData = await axios.get('admin/ajax/get-dashboard-data?duration='+duration);
        	this.data = fetchDashboardData.data;
      }	
    }
}

</script>
